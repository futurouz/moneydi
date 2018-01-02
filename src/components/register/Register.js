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
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Register extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.verifyPhoneNumber = this.verifyPhoneNumber.bind(this);
        this.onVerificationCodeResult = this.onVerificationCodeResult.bind(this);
        this.showLoading = this.showLoading.bind(this);
        this.openVerifyModal = this.openVerifyModal.bind(this);

        this.verificationCode = null;
        this.errorMessage = null;

        this.state = {
            page: 1,
            fbUser: null,
            appKey: null,
            loading: false,
            isOpenVerifyModal: false,
            isOpenErrorModal: false,
            confirmationResult: null
        }
    }

    componentDidMount() {
        const self = this;
        // load data if user is logged in
        const unsubOnAuthChanged = firebase.auth().onAuthStateChanged(function(user) {
            if (user && !user.isAnonymous) {
                // User is signed in.
                self.showLoading();
                self.state.fbUser = user;
                self.getAppKey(user.uid, (appKey) => {
                    self.showLoading(false);
                });
            }
            unsubOnAuthChanged();
        });
    }


    showError(message) {
        this.errorMessage = message;
        this.setState({ isOpenErrorModal: true });
    }

    showLoading(isShow = true) {
        this.setState({ loading: isShow });
    }

    openVerifyModal(isShow = true) {
        this.setState({ isOpenVerifyModal: isShow });
    }

    nextPage() {
        this.saveUserData();
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    saveUserData(isApplied = false) {
        const { user: userData } = this.props;
        console.log(userData)
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
            firebase.database().ref('users/' + uid + '/applications/' + appKey).update(userData);
        })
    }

    getAppKey(uid, cb, excludeAccountFields = false) {
        if(this.state.appKey === null) {
            const that = this;
            // get last app and check if it applied then create a new key, is not use old key
            const recentUserApp = firebase.database().ref('users/' + uid + '/applications').limitToLast(1);
            recentUserApp.once('value', function(snapshot) {
                if(snapshot.numChildren() === 0) {
                    that.state.appKey = firebase.database().ref('users/' + uid + '/applications').push().key;
                    that.props.change('appKey', that.state.appKey);
                    if(cb) {
                        cb(that.state.appKey);
                    }
                    return;
                }
                snapshot.forEach(function(childSnapshot) {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    if(!childData.isApplied) {
                        let excludeField = [];
                        if(excludeAccountFields) {
                            excludeField = ['mobileNo', 'firstName', 'lastName']
                        }
                        for (const key in childData) {
                            if (childData.hasOwnProperty(key) && excludeField.indexOf(key) === -1) {
                                // update form value
                                that.props.change(key, childData[key]);
                            }
                        }
                        that.state.appKey = childKey;
                    } else {
                        that.state.appKey = firebase.database().ref('users/' + uid + '/applications').push().key;
                    }
                    that.props.change('appKey', that.state.appKey);
                    if(cb) {
                        cb(that.state.appKey);
                    }
                });
            });
        } else {
            this.props.change('appKey',this.state.appKey);
            if(cb) {
                cb(this.state.appKey);
            }
        }
    }

    verifyPhoneNumber() {
        const self = this;
        const phoneNumber = '+66' + self.props.user.mobileNo.substr(1);
        const user = firebase.auth().currentUser;
        if (user && !user.isAnonymous && user.phoneNumber === phoneNumber) {
            self.state.fbUser = user;
            self.saveUserData();
            self.nextPage();
        } else {
            // No user is signed in.
            const appVerifier = window.recaptchaVerifier;
            self.showLoading();
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(function (confirmationResult) {
                    self.state.confirmationResult = confirmationResult;
                    self.showLoading(false);
                    self.openVerifyModal();
                })
                .catch(function (error) {
                    self.showLoading(false);
                    self.showError(error.message);
                });
        }
    }

    onVerificationCodeResult() {
        // validate verification code
        if(!this.verificationCode) {
            this.showError("กรุณากรอกรหัสยืนยัน");
            return;
        }

        const self = this;
        this.openVerifyModal(false);
        this.showLoading();
        const code = this.verificationCode;
        this.state.confirmationResult.confirm(code).then(function (result) {
            console.log('User signed in', result.user);
            self.state.fbUser = result.user;
            const uid = self.state.fbUser.uid;
            self.getAppKey(uid, (appKey) => {
                self.showLoading(false);
                self.saveUserData();
                self.nextPage();
            }, true);
        }).catch(function (error) {
            self.showLoading(false);
            self.showError(error.message);
        });
    }

    submitForm() {
        this.saveUserData(true);
        this.nextPage();
    }

    uploadFile() {
        this.saveUserData(true);
        alert('อัพโหลดหลักฐานเรียบร้อยแล้ว ขอบคุณที่ใช้บริการมันนี่ดิค่ะ');
        this.props.history.push('/');
    }

    render() {
        const { page, loading, isOpenErrorModal, isOpenVerifyModal } = this.state;
        const onCancelVerify = () => this.setState({ isOpenVerifyModal: false });
        const onCancelError = () => this.setState({ isOpenErrorModal: false });
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

                <Modal isOpen={isOpenVerifyModal} className=''>
                    <ModalHeader toggle={onCancelVerify}>กรุณายืนยันตัวตน</ModalHeader>
                    <ModalBody>
                        <p>กรอกรหัสยืนยัน 6 หลัก ที่ได้รับจาก SMS</p>
                        <div className="form-group">
                            <input
                                className="form-control"
                                autoFocus
                                onChange={evt => this.verificationCode = evt.target.value}
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onVerificationCodeResult}>ยืนยัน</Button>{' '}
                        <Button color="secondary" onClick={onCancelVerify}>ยกเลิก</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={isOpenErrorModal} className=''>
                    <ModalHeader toggle={onCancelError}>
                        <i className="fa fa-exclamation-circle" aria-hidden="true"/>&nbsp;
                        พบบางอย่างผิดพลาด
                    </ModalHeader>
                    <ModalBody>
                        {this.errorMessage}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={onCancelError}>ปิด</Button>
                    </ModalFooter>
                </Modal>

                {page === 1 && (
                    <RegisterAccountForm
                        onSubmit={this.verifyPhoneNumber}
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