import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";
import renderOptionField from "../common/renderOptionField";


class RegisterLoanForm extends Component {

    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="creditForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                         <div className="progress"> 
                                <div
                                    className="progress-bar progress-bar-info loan_form"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    3/3  (100%)
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

                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>ก่อนหน้า</button>
                                <button type="submit" className="btn btn-primary ml-2">ส่งใบสมัคร</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
}

RegisterLoanForm = reduxForm({form: 'general', destroyOnUnmount: false, validate})(RegisterLoanForm);

export default RegisterLoanForm