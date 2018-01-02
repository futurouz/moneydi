import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import validate from "../common/validate";
import MutiFileField from "../common/MutiFileField";
import firebase from 'firebase';
import connect from "react-redux/es/connect/connect";
import getFormValues from "redux-form/es/getFormValues";

class RegisterUploadFileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selfieIdCardFiles: {
                storagePath: '',
                values: []
            },
            salarySlipFiles: {
                storagePath: '',
                values: []
            },
            statement4MonthFiles: {
                storagePath: '',
                values: []
            },
            secondaryStatement4MonthFiles: {
                storagePath: '',
                values: []
            }
        };

    }

    componentDidMount() {
        const user = firebase
            .auth()
            .currentUser;
        const {user: userData} = this.props;
        const basePath = `/users/${user.uid}/applications/${userData.appKey}`;

        this.setState({
            selfieIdCardFiles: {
                storagePath: `${basePath}/selfieIdCardFiles/`,
                values: []
            },
            salarySlipFiles: {
                storagePath: `${basePath}/salarySlipFiles/`,
                values: []
            },
            statement4MonthFiles: {
                storagePath: `${basePath}/statement4MonthFiles/`,
                values: []
            },
            secondaryStatement4MonthFiles: {
                storagePath: `${basePath}/secondaryStatement4MonthFiles/`,
                values: []
            }
        });
    }

    render() {
        return (
            <div className="uploadFileForm">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>ส่งหลักฐาน</h2>
                        <MutiFileField
                            name="selfieIdCardFiles"
                            label="ถ่ายเซลฟี่คู่กับบัตรประชาชน"
                            required={true}
                            help="ให้เห็นชื่อและใบหน้าในบัตรประชาชนชัดเจน"
                            storagePath={this.state.selfieIdCardFiles.storagePath}
                            values={this.state.selfieIdCardFiles.values}/>
                        <MutiFileField
                            name="salarySlipFiles"
                            label="ถ่ายสลิปเงินเดือน"
                            required={true}
                            help="ถ้าไม่มีเป็น หนังสือรับรองเงินเดือน แทน"
                            storagePath={this.state.salarySlipFiles.storagePath}
                            values={this.state.salarySlipFiles.storagePath}/>
                        <MutiFileField
                            name="statement4MonthFiles"
                            label="ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่เป็นบัญชีเงินเดือน"
                            required={true}
                            help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                            storagePath={this.state.statement4MonthFiles.storagePath}
                            values={this.state.statement4MonthFiles.storagePath}/>
                        <MutiFileField
                            name="secondaryStatement4MonthFiles"
                            label="ถ้าบัญชีเงินเดือนไม่ใช่บัญชีที่ใช้เป็นหลัก ถ่าย Statement ย้อนหลัง 4 เดือน ของบัญชีธนาคารที่ใช้เป็นบัญชีใช้จ่ายหลัก"
                            required={true}
                            help="หรือ ถ่ายสมุดบัญชีพร้อมหน้าที่มีชื่อและเลขบัญชี ย้อนหลัง 4 เดือน ถ้าถ่ายสมุดบัญชี สมุดต้องอัพประจำ"
                            storagePath={this.state.secondaryStatement4MonthFiles.storagePath}
                            values={this.state.secondaryStatement4MonthFiles.storagePath}/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary ml-2">อัพโหลดหลักฐาน</button>
                        </div>
                    </div>
                </div>
            </div>
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

RegisterUploadFileForm = connect(state => {
    const user = getFormValues("apply")(state) || {};
    return {user: user}
})(RegisterUploadFileForm);

export default RegisterUploadFileForm