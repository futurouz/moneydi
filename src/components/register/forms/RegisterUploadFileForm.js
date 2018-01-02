import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import validate from "../common/validate";
import renderFileField from "../common/renderFileField";

class RegisterUploadFileForm extends Component {
   constructor(props) {
        super(props);
        this.state = { file: null };
        this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
        const file = event.target.files[0];
        this.setState({ file });
        console.log('STATEEEs ' +this.state)
    }

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
                                component={renderFileField}
                                type="file"
                                label="ถ่ายเซลฟี่คู่กับบัตรประชาชน"
                                required={true}
                                help="ให้เห็นชื่อและใบหน้าในบัตรประชาชนชัดเจน"
                                onChange={this.handleChange}/>
                            <Field
                                name="salarySlipFile"
                                component={renderFileField}
                                type="file"
                                label="ถ่ายสลิปเงินเดือน"
                                required={true}
                                help="ถ้าไม่มีเป็น หนังสือรับรองเงินเดือน แทน"
                                onChange={this.handleChange}/>
                            <Field
                                name="statement4MonthFiles"
                                component={renderFileField}
                                type="file"
                                label="ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่เป็นบัญชีเงินเดือน"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                                onChange={this.handleChange}/>
                            <Field
                                name="secondaryStatement4MonthFiles"
                                component={renderFileField}
                                type="file"
                                label="ถ้าบัญชีเงินเดือนไม่ใช่บัญชีที่ใช้เป็นหลัก ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่ใช้เป็นบัญชีใช้จ่ายหลัก"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                                onChange={this.handleChange}/>
                            <Field
                                name="test"
                                type="file"
                                onChange={this.handleChange}
                                component={renderFileField}/>

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

RegisterUploadFileForm = reduxForm({
    form: 'apply',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    onSubmitFail: ((errors) => {
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterUploadFileForm);

export default RegisterUploadFileForm