import React, {Component} from 'react';
import {Form, reduxForm} from "redux-form";
import Field from "redux-form/es/Field";
import renderTextField from "../common/renderTextField";

class RegisterThankForm extends Component {

    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="thankyou">
                    <div className="row content">
                        <div className="col-md-4 offset-md-4">
                            <p className="emphasize">
                                ขอบคุณสำหรับเวลาและความสนใจ มันนี่ดิได้รับใบสมัครจากคุณเป็นที่เรียบร้อย ใบสมัครจะได้รับการพิจารณาเมื่อได้รับหลักฐาน
                            </p>
                            <hr/>
                            <p className="emphasize">
                                หลังจากคุณตอบคำถามข้างล่างแล้ว กรุณาส่งหลักฐานในหน้าถัดไป
                            </p>
                            <hr/>
                            <p className="emphasize">
                                มันนี่ดิ อยากช่วยให้มนุษย์เงินเดือนมีแหล่งเงินยืมชั่วคราว ยามเดือดร้อน มาร่วมสร้างสังคมนี้ด้วยกัน<br/>
                                <br/>
                                เราช่วยคุณเวลาคุณเดือดร้อน<br/>
                                เราช่วยคุณประหยัดค่าดอกเบี้ย<br/>
                                เราช่วยคุณไม่เสียค่าธรรมเนียมเวลาชำระเงิน<br/>
                                <br/>
                                เพื่อให้บริการนี้ช่วยมนุษย์เงินเดือนคนอื่นและช่วยคุณในเดือนหน้าๆต่อไป เราสนับสนุนให้คุณบริจาค
                            </p>
                            <hr/>
                            <p className="emphasize">
                                <Field
                                    name="tipAmount"
                                    component={renderTextField}
                                    type="number"
                                    label="จำนวนทิป (บาท)"
                                    help="แนะนำ 4-9% ของยอดกู้ หรือ xxx - xxx บาท (xxx = 4% x ยอดขอกู้)"/>
                            </p>
                            <hr/>
                            <p className="emphasize">
                                เราช่วยคุณ คุณช่วยเรา เพื่อให้เราช่วยคนอื่นต่อไป<br/>
                                การทิปหรือไม่ทิปไม่มีผลกับการอนุมัติสินเชื่อ<br/>
                            </p>

                            <div className="text-center mt-2">
                                <button type="submit" className="btn btn-primary ml-2">ส่งหลักฐาน</button>
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