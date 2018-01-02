import React, {Component} from 'react';
import {Field, Form, reduxForm} from 'redux-form';
import validate from "../common/validate";
import firebase from 'firebase';
import connect from "react-redux/es/connect/connect";
import getFormValues from "redux-form/es/getFormValues";
import renderMultiFileField from "../common/renderMultiFileField";

class RegisterUploadFileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selfieIdCardFiles: {
                storagePath: ''
            },
            salarySlipFiles: {
                storagePath: ''
            },
            statement4MonthFiles: {
                storagePath: ''
            },
            secondaryStatement4MonthFiles: {
                storagePath: ''
            }
        };
        this.preSubmit = this.preSubmit.bind(this);
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        const {user: userData} = this.props;
        const basePath = `/users/${user.uid}/applications/${userData.appKey}`;

        this.setState({
            selfieIdCardFiles: {
                storagePath: `${basePath}/selfieIdCardFiles/`
            },
            salarySlipFiles: {
                storagePath: `${basePath}/salarySlipFiles/`
            },
            statement4MonthFiles: {
                storagePath: `${basePath}/statement4MonthFiles/`
            },
            secondaryStatement4MonthFiles: {
                storagePath: `${basePath}/secondaryStatement4MonthFiles/`
            }
        });
    }

    preSubmit() {
        let includeField = ['selfieIdCardFiles','salarySlipFiles','statement4MonthFiles','secondaryStatement4MonthFiles'];
         for (const key in this.state) {
            if (this.state.hasOwnProperty(key) && includeField.indexOf(key) > -1) {
                 // update form value
                    this.props.change(key, this.state[key].values);
                }
        }
        this.props.onSubmit();
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit(this.preSubmit)}>
                <div className="uploadFileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h2>ส่งหลักฐาน</h2>
                            <Field
                                name="selfieIdCardFiles"
                                component={renderMultiFileField}
                                label="ถ่ายเซลฟี่คู่กับบัตรประชาชน"
                                required={true}
                                help="ให้เห็นชื่อและใบหน้าในบัตรประชาชนชัดเจน"
                                storagePath={this.state.selfieIdCardFiles.storagePath}/>
                            <Field
                                name="salarySlipFiles"
                                component={renderMultiFileField}
                                label="ถ่ายสลิปเงินเดือน"
                                required={true}
                                help="ถ้าไม่มีเป็น หนังสือรับรองเงินเดือน แทน"
                                storagePath={this.state.salarySlipFiles.storagePath}/>
                            <Field
                                name="statement4MonthFiles"
                                component={renderMultiFileField}
                                label="ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่เป็นบัญชีเงินเดือน"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                                storagePath={this.state.statement4MonthFiles.storagePath}/>
                            <Field
                                name="secondaryStatement4MonthFiles"
                                component={renderMultiFileField}
                                label="ถ้าบัญชีเงินเดือนไม่ใช่บัญชีที่ใช้เป็นหลัก ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่ใช้เป็นบัญชีใช้จ่ายหลัก"
                                required={true}
                                help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                                storagePath={this.state.secondaryStatement4MonthFiles.storagePath}/>
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
        if(!errors) return;
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterUploadFileForm);

RegisterUploadFileForm = connect(state => {
    const user = getFormValues("apply")(state) || {};
    return {user: user}
})(RegisterUploadFileForm);

export default RegisterUploadFileForm