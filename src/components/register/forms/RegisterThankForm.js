import React, {Component} from 'react';
import {Form, reduxForm} from "redux-form";

class RegisterThankForm extends Component {

    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="thankyou">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <p>
                                ขอบคุณสำหรับเวลาและความสนใจ มันนี่ดิได้รับใบสมัครจากคุณเป็นที่เรียบร้อย ใบสมัครจะได้รับการพิจารณาเมื่อได้รับหลักฐาน
                            </p>
                            <p>
                                หลังจากคุณตอบคำถามข้างล่างแล้ว กรุณาส่งหลักฐานในหน้าถัดไป
                            </p>

                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>ก่อนหน้า</button>
                                <button type="submit" className="btn btn-primary ml-2">ถัดไป</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    }
}

RegisterThankForm = reduxForm({form: 'general', destroyOnUnmount: false})(RegisterThankForm);

export default RegisterThankForm;