import React, {Component} from 'react';
import Navbar from "../common/Navbar";
import RegisterAccountForm from "./forms/RegisterAccountForm";
import RegisterPersonalForm from "./forms/RegisterPersonalForm";
import RegisterLoanForm from "./forms/RegisterLoanForm";
import RegisterThankForm from "./forms/RegisterThankForm";
import RegisterUploadFileForm from "./forms/RegisterUploadFileForm";
import firebase from 'firebase';
import connect from "react-redux/es/connect/connect";
import getFormValues from "redux-form/es/getFormValues";

class Register extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.state = {
            page: 1,
            fbUser: null,
            appKey: null
        }
    }

    componentDidMount() {
        // sign in anonymously to firebase
        firebase
            .auth()
            .signInAnonymously()
            .catch((e) => {
                console.log(e.code + ' ' + e.message);
            });

        // wait for signing in
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    console.log('User signed in');
                    this.state.fbUser = user;
                    const uid = this.state.fbUser.uid;
                    this.getAppKey(uid)
                } else {
                    console.log('User signed out')
                }
            });
    }

    saveUserData(isApplied = false) {
        const { user: userData } = this.props;
        if(!userData.hasOwnProperty('isApply')){
            userData.isApplied = false;
        }
        if(isApplied && !userData.isApplied) {
            userData.isApplied = true;
        }

        // reject to save user data if already applied
        if(userData.isApplied === true) {
            return;
        }

        // user is not logged in
        if(this.state.fbUser === null) {
            return;
        }

        // save user to firebase
        const uid = this.state.fbUser.uid;
        this.getAppKey(uid, (appKey) => {
            let updates = {};
            updates['users/' + uid + '/applications/' + appKey] = userData;
            firebase.database().ref().update(updates);
        })
    }

    getAppKey(uid, cb) {
        if(this.state.appKey === null) {
            const that = this;
            // get last app and check if it applied then create a new key, is not use old key
            const recentUserApp = firebase.database().ref('users/' + uid + '/applications').limitToLast(1);
            recentUserApp.once('value', function(snapshot) {
                if(snapshot.numChildren() === 0) {
                    that.state.appKey = firebase.database().ref('users/' + uid + '/applications').push().key;
                    if(cb) {
                        cb(that.state.appKey);
                    }
                    return;
                }
                snapshot.forEach(function(childSnapshot) {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    if(!childData.isApplied) {
                        // TODO: Set user data

                        that.state.appKey = childKey;
                    } else {
                        that.state.appKey = firebase.database().ref('users/' + uid + '/applications').push().key;
                    }
                    if(cb) {
                        cb(that.state.appKey);
                    }
                });
            });
        } else {
            if(cb) {
                cb(this.state.appKey);
            }
        }
    }

    nextPage() {
        this.saveUserData();
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    submitForm() {
        this.saveUserData(true);
        this.nextPage();
    }

    uploadFile() {
        alert('อัพโหลดหลักฐานเรียบร้อยแล้ว ขอบคุณที่ใช้บริการมันนี่ดิค่ะ');
        this.props.history.push('/');
    }

    render() {
        const { page } = this.state;
        return (
            <div>
                <Navbar/>
                {page === 1 && (
                    <RegisterAccountForm onSubmit={this.nextPage} />
                )}
                {page === 2 && (
                    <RegisterPersonalForm
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <RegisterLoanForm
                        previousPage={this.previousPage}
                        onSubmit={this.submitForm}
                    />
                )}
                {page === 4 && (
                    <RegisterThankForm
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 5 && (
                    <RegisterUploadFileForm
                        onSubmit={this.uploadFile}
                    />
                )}
            </div>
        )
    }
}

// read user form and map to state
Register = connect(
    state => {
        const user = getFormValues("apply")(state) || {};
        return {
            user: user
        }
    }
)(Register);

export default Register