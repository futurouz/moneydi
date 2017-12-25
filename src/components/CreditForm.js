import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import firebase from 'firebase';
import Form from './Form';

class CreditForm extends Component {

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
            .push('/agreement')
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <Form>
                <div className="creditForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 ">
                            <form onSubmit={handleSubmit(this.submit)}>
                                <h2>สินเชื่อ</h2>
                                <div>
                                    <label htmlFor="obective">วัตถุประสงค์ในการขอสินเชื่อ</label>
                                    <Field name="obective" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="limit">วงเงินที่ต้องการ (บาท)</label>
                                    <Field name="limit" component="input" type="number" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="MinimumLimit">วงเงินขั้นต่ำที่ต้องการ (บาท)</label>
                                    <Field
                                        name="MinimumLimit"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="promptPay">โอนเงินแบบพร้อมเพย์ ระบุ เลขบัตรประชาชน เบอร์มือถือ</label>
                                    <Field
                                        name="promptPay"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="bank">ต้องการโอนเงินเข้าบัญชีธนาคาร โปรดระบุชื่อธนาคาร ชื่อบัญชีและเลขที่บัญชี</label>
                                    <Field name="bank" component="input" type="number" className="form-control"/>
                                </div>

                                <button type="submit" className="btn">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
};

CreditForm = reduxForm({form: 'general', destroyOnUnmount: false})(CreditForm)

export default CreditForm