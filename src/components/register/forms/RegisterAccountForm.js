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
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="profileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h2>โปรไฟล์</h2>
                            <Field
                                name="firstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"
                            />
                            <Field
                                name="lastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"
                            />
                            <Field
                                name="mobileNo"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์มือถือ"
                            />
                            <Field
                                name="password"
                                component={renderTextField}
                                type="text"
                                label="รหัสผ่าน"
                            />
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

RegisterAccountForm = reduxForm({
    form: 'general',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(RegisterAccountForm);

export default RegisterAccountForm