import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Navbar from "../common/Navbar";
import RegisterAccountForm from "./forms/RegisterAccountForm";
import RegisterPersonalForm from "./forms/RegisterPersonalForm";
import RegisterAgreementForm from "./forms/RegisterAgreementForm";
import RegisterLoanForm from "./forms/RegisterLoanForm";
import RegisterThankForm from "./forms/RegisterThankForm";
import RegisterUploadFileForm from "./forms/RegisterUploadFileForm";

class Register extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    submitForm() {
        this.nextPage();
    }

    uploadFile() {
        alert('อัพโหลดหลักฐานเรียบร้อยแล้ว ขอบคุณที่ใช้บริการมันนี่ดิค่ะ');
        this.props.history.push('/');
    }

    render() {
        const { page } = this.state;
        return (
            <div>
                <Navbar/>
                {page === 1 && (
                    <RegisterAccountForm onSubmit={this.nextPage} />
                )}
                {page === 2 && (
                    <RegisterPersonalForm
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <RegisterLoanForm
                        previousPage={this.previousPage}
                        onSubmit={this.submitForm}
                    />
                )}
                {page === 4 && (
                    <RegisterThankForm
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 5 && (
                    <RegisterUploadFileForm
                        onSubmit={this.uploadFile}
                    />
                )}
            </div>
        )
    }
}

export default Register