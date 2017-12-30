import React, {Component} from 'react';
import {Form, Field, reduxForm, getFormValues} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";
import renderOptionField from "../common/renderOptionField";
import {connect} from "react-redux";
import firebase from 'firebase';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class RegisterLoanForm extends Component {

    constructor(props) {
        super(props);
        this.preSubmit = this.preSubmit.bind(this);
        this.submitForm = this.props.submitForm;
        this.onVerificationCodeResult = this.onVerificationCodeResult.bind(this);
        this.verificationCode = null;
        this.errorMessage = null;
        this.state = {
            isOpenVerifyModal: false,
            isOpenErrorModal: false,
            confirmationResult: null
        }
    }

    componentDidMount() {
        firebase.auth().languageCode = 'th';
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('btn-apply', {
            'size': 'invisible',
            'callback': function(response) {
                console.log(response);
            }
        });
    }

    preSubmit() {
        const self = this;

        // save data to anonymous before migrate to auth user
        self.props.onSubmit();

        const phoneNumber = '+66' + this.props.user.mobileNo.substr(1);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                self.state.confirmationResult = confirmationResult;
                self.setState({ isOpenVerifyModal: true });
            })
            .catch(function (error) {
                self.showError(error.message);
            });
    }

    onVerificationCodeResult() {
        // validate verification code
        if(!this.verificationCode) {
            this.showError("กรุณากรอกรหัสยืนยัน");
            return;
        }

        const self = this;
        this.setState({ isOpenVerifyModal: false });
        const code = this.verificationCode;
        this.state.confirmationResult.confirm(code).then(function (result) {
            result.user.credential = firebase.auth.PhoneAuthProvider.credential(self.state.confirmationResult.verificationId, code);
            self.props.onSubmit(result.user);
        }).catch(function (error) {
            self.showError(error.message);
        });
    }

    showError(message) {
        this.errorMessage = message;
        this.setState({ isOpenErrorModal: true });
    }

    render() {
        const {isOpenVerifyModal, isOpenErrorModal} = this.state;
        const {previousPage, handleSubmit} = this.props;
        const onCancelVerify = () => this.setState({ isOpenVerifyModal: false });
        const onCancelError = () => this.setState({ isOpenErrorModal: false });
        return (
            <Form onSubmit={handleSubmit(this.preSubmit)}>
                <Modal isOpen={isOpenVerifyModal} className=''>
                    <ModalHeader toggle={onCancelVerify}>กรอกรหัสยืนยัน</ModalHeader>
                    <ModalBody>
                        <p>กรุณากรอกรหัสยืนยัน 6 หลัก ที่ได้รับจาก SMS</p>
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

                <div className="creditForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="page">หน้า 3/3</div>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info loan_form"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    100%
                                </div>
                            </div>

                            <h2>สินเชื่อ</h2>

                            <Field
                                name="objective"
                                component={renderTextField}
                                type="text"
                                label="วัตถุประสงค์ในการขอสินเชื่อ"
                                required={true}
                            />
                            <Field
                                name="needLoan"
                                component={renderTextField}
                                type="number"
                                label="วงเงินที่ต้องการ (บาท)"
                                required={true}
                            />
                            <Field
                                name="minimumLoan"
                                component={renderTextField}
                                type="number"
                                label="วงเงินขั้นต่ำที่ต้องการ (บาท)"
                                required={true}
                            />
                            <Field
                                name="transferMethod"
                                component={renderOptionField}
                                label="ช่องทางการรับเงิน"
                                required={true}
                                options={[
                                    {
                                        value: 'prompt_pay',
                                        label: 'โอนเงินแบบพร้อมเพย์'
                                    }, {
                                        value: 'bank_transfer',
                                        label: 'โอนเข้าบัญชีธนาคาร'
                                    }
                                ]}/>
                            <Field
                                name="promptPayAccountNo"
                                component={renderTextField}
                                type="text"
                                label="เลขบัตรประชาชน หรือ เบอร์มือถือ (กรณีโอนเงินแบบพร้อมเพย์)"
                            />
                            <Field
                                name="bankName"
                                component={renderOptionField}
                                label="ธนาคาร (กรณีโอนเงินเข้าบัญชีธนาคาร)"
                                options={[
                                    {
                                        value: 'กสิกรไทย',
                                        label: 'กสิกรไทย'
                                    }, {
                                        value: 'กรุงเทพ',
                                        label: 'กรุงเทพ'
                                    }, {
                                        value: 'ไทยพาณิชย์',
                                        label: 'ไทยพาณิชย์'
                                    }, {
                                        value: 'กรุงไทย',
                                        label: 'กรุงไทย'
                                    }, {
                                        value: 'กรุงศรี',
                                        label: 'กรุงศรี'
                                    }, {
                                        value: 'ทีเอ็มบี',
                                        label: 'ทีเอ็มบี'
                                    }, {
                                        value: 'ซีไอเอ็มบี',
                                        label: 'ซีไอเอ็มบี'
                                    }
                                ]}/>
                            <Field
                                name="bankAccountNo"
                                component={renderTextField}
                                type="text"
                                label="เลขที่บัญชี (กรณีโอนเงินเข้าบัญชีธนาคาร)"
                            />
                            <Field
                                name="bankAccountName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อบัญชี (กรณีโอนเงินเข้าบัญชีธนาคาร)"
                            />
                            <Field
                                name="lackMoneyFrequency"
                                component={renderOptionField}
                                label="คุณเดือดร้อนเงินไม่พอใช้บ่อยขนาดไหน"
                                required={true}
                                options={[
                                    {
                                        value: 'ครั้งนี้ครั้งแรก',
                                        label: 'ครั้งนี้ครั้งแรก'
                                    }, {
                                        value: 'นานๆครั้ง',
                                        label: 'นานๆครั้ง'
                                    }, {
                                        value: 'เกือบทุกเดือน',
                                        label: 'เกือบทุกเดือน'
                                    }
                                ]}/>
                            <Field
                                name="loanNextMonthPossibility"
                                component={renderOptionField}
                                label="ความเป็นไปได้ที่คุณจะขอยืมเงินจากเราอีกในเดือนถัดไป"
                                required={true}
                                options={[
                                    {
                                        value: '99%',
                                        label: '99%'
                                    }, {
                                        value: '75%',
                                        label: '75%'
                                    }, {
                                        value: '50%',
                                        label: '50%'
                                    }, {
                                        value: '10%',
                                        label: '10%'
                                    }, {
                                        value: '1%',
                                        label: '1%'
                                    }
                                ]}/>

                            <div className="text-center button-wrapper">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>ก่อนหน้า</button>
                                <button
                                    type="submit" id="btn-apply" className="btn btn-primary ml-2">
                                    ส่งใบสมัคร
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
}

RegisterLoanForm = reduxForm({
    form: 'apply',
    destroyOnUnmount: false,
    validate,
    onSubmitFail: ((errors) => {
        if(!errors) return;
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterLoanForm);

RegisterLoanForm = connect(
    state => {
        const user = getFormValues("apply")(state) || {};
        return {
            user: user
        }
    }
)(RegisterLoanForm);

export default RegisterLoanForm