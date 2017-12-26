import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import firebase from 'firebase';
import Form from './Form';

class ProfileForm extends Component {

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
                    var uid = user.uid;
                    var userRef = firebase
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
            .push('/registerCon')
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <Form>
                <div className="profileForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h1>สมัครยืมเงินมันนี่ดิ</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <form onSubmit={handleSubmit(this.submit)}>
                                <div>
                                    <label htmlFor="firstName">ชื่อ</label>
                                    <Field name="firstName" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">นามสกุล</label>
                                    <Field name="lastName" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="mobileNo">โทรศัพท์มือถือ</label>
                                    <Field
                                        name="mobileNo"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="password">รหัสผ่าน</label>
                                    <Field
                                        name="password"
                                        component="input"
                                        type="password"
                                        className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-btn-info">Next</button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info profile_progress"
                                    role="progressbar"
                                    // aria-valuenow="33"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    หน้า 1 จาก 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }
};

ProfileForm = reduxForm({form: 'general', destroyOnUnmount: false})(ProfileForm)

export default ProfileForm