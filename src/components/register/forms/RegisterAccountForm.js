import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form'
import renderTextField from "../common/renderTextField";
import validate from "../common/validate";
import firebase from 'firebase';

class RegisterAccountForm extends Component {

    submit(values, dispatch, props) {
        firebase
            .auth()
            .signInAnonymously()
            .catch((e) => {
                console.log(e.code + ' ' + e.message);
            });

        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    const uid = user.uid;
                    const userRef = firebase
                        .database()
                        .ref()
                        .child(`users`)
                        .child(uid);
                    userRef.set(values);
                } else {
                    console.log('User signout')
                }
            });

        props
            .history
            .push('/registerCon2');
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="profileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {/* Progress Bar */}
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info account_progress"
                                    role="progressbar"
                                    aria-valuenow="33"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    1/3 (33%)
                                </div>
                            </div>

                            <h2>โปรไฟล์</h2>
                            <Field
                                name="mobileNo"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์มือถือ (username)"
                                required={true}
                                maxLength={10}
                                help="ตัวเลข 10 ตัว เช่น 0971177937"/>
                            <Field
                                name="firstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"
                                required={true}/>
                            <Field
                                name="lastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"
                                required={true}/>
                            <Field
                                name="password"
                                component={renderTextField}
                                type="text"
                                label="รหัสผ่าน"
                                required={true}/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">ถัดไป</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }
}

RegisterAccountForm = reduxForm({form: 'general', destroyOnUnmount: false, forceUnregisterOnUnmount: true, validate})(RegisterAccountForm);

export default RegisterAccountForm