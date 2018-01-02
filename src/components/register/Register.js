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
import {reduxForm} from "redux-form";
import {PulseLoader} from "react-spinners";

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
            appKey: null,
            loading: true
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
                    console.log('User signed in', user);
                    this.state.fbUser = user;
                    const uid = this.state.fbUser.uid;
                    this.getAppKey(uid, (appKey) => {
                        this.setState({
                            loading: false
                        });
                    })
                } else {
                    console.log('User signed out')
                }
            });
    }

    saveUserData(isApplied = false, oldUser = null) {
        const { user: userData } = this.props;

        // reject to save user data if already applied
        if(userData.isApplied === true) {
            return;
        }

        // user is not logged in
        if(this.state.fbUser === null) {
            return;
        }

        if(!userData.hasOwnProperty('isApplied')){
            userData.isApplied = false;
        }
        if(isApplied && !userData.isApplied) {
            userData.isApplied = true;
        }

        // save user to firebase
        const uid = this.state.fbUser.uid;
        this.getAppKey(uid, (appKey) => {
            if(oldUser !== null) {
                userData.fromAnonymousUid = oldUser.uid;
            }
            firebase.database().ref('users/' + uid + '/applications/' + appKey).update(userData);
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
                        for (const key in childData) {
                            if (childData.hasOwnProperty(key)) {
                                // update form value
                                that.props.change(key, childData[key]);
                            }
                        }
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

    submitForm(user = null) {
        if(!user) {
            this.saveUserData();
            return;
        }

        const oldUser = this.state.fbUser;
        // remove old user data
        if(oldUser.uid !== user.uid) {
            this.deleteAnonymousUser(oldUser, user, () => {
                this.state.fbUser = user;
                this.state.appKey = null;
                this.saveUserData(true, oldUser);
                this.nextPage();
            });
        } else {
            this.saveUserData(true);
        }
    }

    deleteAnonymousUser(oldUser, newUser, cb) {
        // TODO: find a way to delete anonymous data
        cb();
    }

    uploadFile() {
        alert('อัพโหลดหลักฐานเรียบร้อยแล้ว ขอบคุณที่ใช้บริการมันนี่ดิค่ะ');
        this.props.history.push('/');
    }

    render() {
        const { page, loading } = this.state;
        return (
            <div>
                <Navbar/>
                {loading && (
                <div className="spinner-container">
                    <div className="spinner-item">
                        <PulseLoader color={'#0588cf'}/>
                    </div>
                </div>
                )}
                {page === 1 && (
                    <RegisterAccountForm
                        onSubmit={this.nextPage}
                        disabled={loading}
                    />
                )}
                {page === 2 && (
                    <RegisterPersonalForm
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        disabled={loading}
                    />
                )}
                {page === 3 && (
                    <RegisterLoanForm
                        previousPage={this.previousPage}
                        onSubmit={this.submitForm}
                        disabled={loading}
                    />
                )}
                {page === 4 && (
                    <RegisterThankForm
                        onSubmit={this.submitForm}
                        disabled={loading}
                    />
                )}
                {page === 5 && (
                    <RegisterUploadFileForm
                        onSubmit={this.uploadFile}
                        disabled={loading}
                    />
                )}
            </div>
        )
    }
}

Register = reduxForm({
    form: 'apply'
})(Register);

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