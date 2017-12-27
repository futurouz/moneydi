import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";
import renderOptionField from "../common/renderOptionField";


class RegisterUploadFileForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="uploadFileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h2>ส่งหลักฐาน</h2>

                            <Field
                                name="selfieIdCardFile"
                                component={renderTextField}
                                type="file"
                                label="ถ่ายเซลฟี่คู่กับบัตรประชาชน"
                                required={true}
                                help="ให้เห็นชื่อและใบหน้าในบัตรประชาชนชัดเจน"
                            />
                            <Field
                                name="salarySlipFile"
                                component={renderTextField}
                                type="file"
                                label="ถ่ายสลิปเงินเดือน"
                                required={true}
                                help="ถ้าไม่มีเป็น หนังสือรับรองเงินเดือน แทน"
                            />
                            <Field
                                name="statement4Moneth"
                                component={renderTextField}
                                type="file"
                                label="ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่เป็นบัญชีเงินเดือน"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                            />
                            <Field
                                name="statement4Moneth"
                                component={renderTextField}
                                type="file"
                                label="ถ้าบัญชีเงินเดือนไม่ใช่บัญชีที่ใช้เป็นหลัก ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่ใช้เป็นบัญชีใช้จ่ายหลัก"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                            />

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary ml-2">อัพโหลดหลักฐาน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
}

RegisterUploadFileForm = reduxForm({form: 'general', destroyOnUnmount: false, validate})(RegisterUploadFileForm);

export default RegisterUploadFileForm