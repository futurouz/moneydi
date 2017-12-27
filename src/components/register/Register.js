import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Navbar from "../common/Navbar";
import RegisterAccountForm from "./forms/RegisterAccountForm";
import RegisterPersonalForm from "./forms/RegisterPersonalForm";
import RegisterAgreementForm from "./forms/RegisterAgreementForm";
import RegisterLoanForm from "./forms/RegisterLoanForm";
import RegisterThankForm from "./forms/RegisterThankForm";

class Register extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.submitForm = this.submitForm.bind(this);
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
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
            </div>
        )
    }
}

export default Register