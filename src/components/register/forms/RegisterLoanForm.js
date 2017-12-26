import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";


class RegisterLoanForm extends Component {

    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="creditForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                         <div class="progress"> 
                                <div
                                    class="progress-bar progress-bar-info loan_form"
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
                            />
                            <Field
                                name="needLoan"
                                component={renderTextField}
                                type="number"
                                label="วงเงินที่ต้องการ (บาท)"
                            />
                            <Field
                                name="minimumLoan"
                                component={renderTextField}
                                type="number"
                                label="วงเงินขั้นต่ำที่ต้องการ (บาท)"
                            />
                            <Field
                                name="promptPay"
                                component={renderTextField}
                                type="text"
                                label="โอนเงินแบบพร้อมเพย์ ระบุ เลขบัตรประชาชน เบอร์มือถือ"
                            />
                            <Field
                                name="bank"
                                component={renderTextField}
                                type="text"
                                label="ต้องการโอนเงินเข้าบัญชีธนาคาร โปรดระบุชื่อธนาคาร ชื่อบัญชีและเลขที่บัญชี"
                            />

                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>ก่อนหน้า</button>
                                <button type="submit" className="btn btn-primary ml-2">ถัดไป</button>
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