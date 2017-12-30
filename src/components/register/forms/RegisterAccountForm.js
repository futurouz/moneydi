import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";

class RegisterAccountForm extends Component {

    render() {
        const {handleSubmit, disabled} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="profileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {/* Progress Bar */}
                            <div className="page">หน้า 1/3</div>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info account_progress"
                                    role="progressbar"
                                    aria-valuenow="33"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    33%
                                </div>
                            </div>

                            <h2>ขั้นตอนการสมัคร</h2>
                            <div>
                                <ol>
                                    <li>กรอกใบสมัคร ไม่มีค่าสมัคร ไม่ต้องใช้สินทรัพย์หรือคนค้ำ</li>
                                    <li>รอการแจ้งผลทาง SMS ภายใน 24 ชั่วโมง</li>
                                    <li>หากอนุมัติ มันนี่ดิจะโอนเงินเข้าบัญชีคุณ</li>
                                    <li>มันนี่ดิจะแจ้งเบอร์บัญชีพร้อมเพย์ให้คุณโอนเงินและดอกเบี้ยบริจาค</li>
                                </ol>
                            </div>


                            <h2>โปรไฟล์</h2>
                            <Field
                                name="mobileNo"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์มือถือ (username)"
                                required={true}
                                maxLength={10}
                                help="ตัวเลข 10 ตัว เช่น 0971177937"
                                disabled={disabled}/>
                            <Field
                                name="firstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"
                                required={true}
                                disabled={disabled}/>
                            <Field
                                name="lastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"
                                required={true}
                                disabled={disabled}/>
                            <Field
                                name="password"
                                component={renderTextField}
                                type="text"
                                label="รหัสผ่าน"
                                required={true}
                                disabled={disabled}/>
                            <div className="text-center">
                                <button type="submit" disabled={disabled} className="btn btn-primary">ถัดไป</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }
}

RegisterAccountForm = reduxForm({
    form: 'apply',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    onSubmitFail: ((errors) => {
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterAccountForm);

export default RegisterAccountForm