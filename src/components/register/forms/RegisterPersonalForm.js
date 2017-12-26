import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import Form from "redux-form/es/Form";
import validate from "../common/validate";
import renderTextField from "../common/renderTextField";
import renderOptionField from "../common/renderOptionField";

class RegisterPersonalForm extends Component {

    scrollToError(errors) {}

    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="infoForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 ">
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info personal_form"
                                    role="progressbar"
                                    aria-valuenow="66"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    2/3 (66%)
                                </div>
                            </div>

                            {/* Personal */}
                            <h2>ประวัติส่วนตัวผู้สมัคร</h2>

                            <Field
                                name="citizenId"
                                component={renderTextField}
                                type="number"
                                label="เลขที่บัตรประชาชน"
                                className="required"/>
                            <Field name="age" component={renderTextField} type="text" label="อายุ"/>
                            <Field
                                name="address"
                                component={renderTextField}
                                type="text"
                                label="ที่อยู่ปัจจุบัน"/>
                            <Field name="province" component={renderTextField} type="text" label="จังหวัด"/>
                            <Field name="province" component={renderTextField} type="text" label="จังหวัด"/>
                            <Field
                                name="addressAge"
                                component={renderOptionField}
                                label="ที่อยู่ปัจจุบันอยู่มานานเท่าไร"
                                options={[
                                {
                                    value: '1 เดือน',
                                    label: '1 เดือน'
                                }, {
                                    value: '2 - 5 เดือน',
                                    label: '2 - 5 เดือน'
                                }, {
                                    value: '6 - 12 เดือน',
                                    label: '6 - 12 เดือน'
                                }, {
                                    value: '1-2 ปี',
                                    label: '1-2 ปี'
                                }, {
                                    value: 'มากกว่า 2 ปี',
                                    label: 'มากกว่า 2 ปี'
                                }
                            ]}/>
                            <Field
                                name="mobileAge"
                                component={renderOptionField}
                                label="เบอร์มือถือใช้มานานเท่าไร"
                                options={[
                                {
                                    value: '1 เดือน',
                                    label: '1 เดือน'
                                }, {
                                    value: '2 - 5 เดือน',
                                    label: '2 - 5 เดือน'
                                }, {
                                    value: '6 - 12 เดือน',
                                    label: '6 - 12 เดือน'
                                }, {
                                    value: '1-2 ปี',
                                    label: '1-2 ปี'
                                }, {
                                    value: 'มากกว่า 2 ปี',
                                    label: 'มากกว่า 2 ปี'
                                }
                            ]}/>
                            <Field name="lineId" component={renderTextField} type="text" label="LINE ID"/>
                            <Field name="email" component={renderTextField} type="text" label="Email"/>
                            <Field
                                name="homeType"
                                component={renderOptionField}
                                label="ประเภทที่อยู่อาศัย"
                                options={[
                                {
                                    value: 'บ้านเดี่ยว',
                                    label: 'บ้านเดี่ยว'
                                }, {
                                    value: 'ทาวน์เฮ้าส์',
                                    label: 'ทาวน์เฮ้าส์'
                                }, {
                                    value: 'คอนโดมิเนียม',
                                    label: 'คอนโดมิเนียม'
                                }, {
                                    value: 'อพาร์ตเม้นท์',
                                    label: 'อพาร์ตเม้นท์'
                                }
                            ]}/>
                            <Field
                                name="homeStatus"
                                component={renderOptionField}
                                label="สถานะการพักอำศัย"
                                options={[
                                {
                                    value: 'บ้านของตนเอง',
                                    label: 'บ้านของตนเอง'
                                }, {
                                    value: 'บ้านบิดา/มารดา/ญาติ',
                                    label: 'บ้านบิดา/มารดา/ญาติ'
                                }, {
                                    value: 'บ้านพักสวัสดิการ',
                                    label: 'บ้านพักสวัสดิการ'
                                }, {
                                    value: 'เช่า',
                                    label: 'เช่า'
                                }
                            ]}/>
                            <Field
                                name="education"
                                component={renderOptionField}
                                label="การศึกษา"
                                options={[
                                {
                                    value: 'ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า',
                                    label: 'ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า'
                                }, {
                                    value: 'อนุปริญญา/ปวส./เทียบเท่า',
                                    label: 'อนุปริญญา/ปวส./เทียบเท่า'
                                }, {
                                    value: 'ปริญญาตรี',
                                    label: 'ปริญญาตรี'
                                }, {
                                    value: 'สูงกว่าปริญญาตรี',
                                    label: 'สูงกว่าปริญญาตรี'
                                }
                            ]}/>
                            <Field
                                name="status"
                                component={renderOptionField}
                                label="สถานะ"
                                options={[
                                {
                                    value: 'โสด',
                                    label: 'โสด'
                                }, {
                                    value: 'สมรสจดทะเบียน',
                                    label: 'สมรสจดทะเบียน'
                                }, {
                                    value: 'สมรสไม่จดทะเบียน',
                                    label: 'สมรสไม่จดทะเบียน'
                                }, {
                                    value: 'หย่า / หม้าย',
                                    label: 'หย่า / หม้าย'
                                }
                            ]}/> {/* Spouse */}
                            <h2>ข้อมูลคู่สมรส</h2>

                            <Field
                                name="coupleFirstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"/>
                            <Field
                                name="coupleLastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"/>
                            <Field
                                name="couplePlace"
                                component={renderTextField}
                                type="text"
                                label="ชื่อสถานที่ทำงาน"/>
                            <Field name="coupleWork" component={renderTextField} type="text" label="อาชีพ"/>
                            <Field
                                name="couplePosition"
                                component={renderTextField}
                                type="text"
                                label="ตำแหน่ง"/>
                            <Field
                                name="coupleMobile"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์มือถือ"/>
                            <Field
                                name="coupleSalary"
                                component={renderTextField}
                                type="number"
                                label="รายได้ (ต่อเดือน)"/> {/* Contact */}
                            <h2>บุคคลที่อนุญาตให้ติดต่อได้ (ไม่ใช่คู่สมรส)</h2>

                            <Field
                                name="contactFirstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"/>
                            <Field
                                name="contactLastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"/>
                            <Field
                                name="contactMobile"
                                component={renderTextField}
                                type="number"
                                label="โทรศัพท์มือถือ"/>
                            <Field
                                name="relation"
                                component={renderOptionField}
                                label="ความสัมพันธ์"
                                options={[
                                {
                                    value: 'บิดา/มารดา',
                                    label: 'บิดา/มารดา'
                                }, {
                                    value: 'พี่น้อง',
                                    label: 'พี่น้อง'
                                }, {
                                    value: 'ญาติ',
                                    label: 'ญาติ'
                                }, {
                                    value: 'เพื่อนร่วมงาน',
                                    label: 'เพื่อนร่วมงาน'
                                }
                            ]}/> {/* occupation */}
                            <h2>ข้อมูลอาชีพและรายได้</h2>

                            <Field
                                name="work"
                                component={renderOptionField}
                                label="อาชีพ"
                                options={[
                                {
                                    value: 'ครู/อาจารย์',
                                    label: 'ครู/อาจารย์'
                                }, {
                                    value: 'ตำรวจ/ทหาร',
                                    label: 'ตำรวจ/ทหาร'
                                }, {
                                    value: 'แพทย์',
                                    label: 'แพทย์'
                                }, {
                                    value: 'พยาบาล',
                                    label: 'พยาบาล'
                                }, {
                                    value: 'ธุรการ',
                                    label: 'ธุรการ'
                                }, {
                                    value: 'พนักงานสายการผลิต',
                                    label: 'พนักงานสายการผลิต'
                                }, {
                                    value: 'พนักงานบัญชี/การเงิน',
                                    label: 'พนักงานบัญชี/การเงิน'
                                }, {
                                    value: 'ักษาความปลอดภัย',
                                    label: 'ักษาความปลอดภัย'
                                }, {
                                    value: 'แม่บ้าน',
                                    label: 'แม่บ้าน'
                                }, {
                                    value: 'เจ้าของกิจการ(จดทะเบียนนิติบุคคล)',
                                    label: 'เจ้าของกิจการ(จดทะเบียนนิติบุคคล)'
                                }, {
                                    value: 'เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)',
                                    label: 'เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)'
                                }, {
                                    value: 'พ่อค้า/แม่ค้า',
                                    label: 'พ่อค้า/แม่ค้า'
                                }, {
                                    value: 'ขับแท็กซี่ วินมอเตอร์ไซด์',
                                    label: 'ขับแท็กซี่ วินมอเตอร์ไซด์'
                                }, {
                                    value: 'ว่างงาน',
                                    label: 'ว่างงาน'
                                }
                            ]}/>
                            <Field
                                name="workStatus"
                                component={renderOptionField}
                                label="สถานะการทำงาน"
                                options={[
                                {
                                    value: 'พนักงานประจำ',
                                    label: 'พนักงานประจำ'
                                }, {
                                    value: 'พนักงานชั่วคราว',
                                    label: 'พนักงานชั่วคราว'
                                }, {
                                    value: 'พนักงานรายวัน',
                                    label: 'พนักงานรายวัน'
                                }, {
                                    value: 'ว่างงาน',
                                    label: 'ว่างงาน'
                                }
                            ]}/>
                            <Field
                                name="workName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อสถานที่ทำงาน"/>
                            <Field
                                name="workAddress"
                                component={renderTextField}
                                type="text"
                                label="ที่อยู่สถานที่ทำงาน หรือเว็บไซต์"/>
                            <Field
                                name="workMobile"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์"/>
                            <Field
                                name="amountOfEmployee"
                                component={renderOptionField}
                                label="จำนวนพนักงานในที่ทำงาน"
                                options={[
                                {
                                    value: '1 คน',
                                    label: '1 คน'
                                }, {
                                    value: '2-10 คน',
                                    label: '2-10 คน'
                                }, {
                                    value: '11-50 คน',
                                    label: '11-50 คน'
                                }, {
                                    value: '51-100 คน',
                                    label: '51-100 คน'
                                }, {
                                    value: '101-1000 คน',
                                    label: '101-1000 คน'
                                }, {
                                    value: 'มากกว่า 1000',
                                    label: 'มากกว่า 1000'
                                }
                            ]}/>
                            <Field
                                name="workPosition"
                                component={renderTextField}
                                type="text"
                                label="ตำแหน่งงาน"/>
                            <Field
                                name="workDepartment"
                                component={renderTextField}
                                type="text"
                                label="แผนก/ฝ่าย"/>
                            <Field
                                name="income"
                                component={renderTextField}
                                type="number"
                                label="รายได้ประจำ ต่อเดือน"/>
                            <Field
                                name="overTime"
                                component={renderTextField}
                                type="number"
                                label="ค่าล่วงเวลา ต่อเดือน"/>
                            <Field
                                name="anotherIncome"
                                component={renderTextField}
                                type="number"
                                label="รายได้อื่นๆต่อเดือน"/>
                            <Field
                                name="salaryMethod"
                                component={renderOptionField}
                                label="วิธีรับเงินเดือน"
                                options={[
                                {
                                    value: 'โอนผ่านธนาคาร',
                                    label: 'โอนผ่านธนาคาร'
                                }, {
                                    value: 'รับเป็นเช็ค',
                                    label: 'รับเป็นเช็ค'
                                }, {
                                    value: 'รับเป็นเงินสด',
                                    label: 'รับเป็นเงินสด'
                                }
                            ]}/>
                            <Field
                                name="getSalaryTimes"
                                component={renderTextField}
                                type="number"
                                label="รับเงินเดือนเดือนละ (ครั้ง)"/>
                            <Field
                                name="getSalaryDate"
                                component={renderTextField}
                                type="date"
                                label="รับเงินวันที่"/> {/* outcome */}
                            <h2>ค่าใช้จ่าย</h2>

                            <Field
                                name="installment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนรถ บาทต่อเดือน"/>
                            <Field
                                name="rentHouse"
                                component={renderTextField}
                                type="number"
                                label="ค่าเช่าบ้าน บาทต่อเดือน"/>
                            <Field
                                name="loanHouse"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนบ้าน บาทต่อเดือน"/>
                            <Field
                                name="loanCredit"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนบัตรเครดิต บาทต่อเดือน"/>
                            <Field
                                name="creditDebt"
                                component={renderTextField}
                                type="number"
                                label="หนี้บัตรเครดิต (ยอดคงค้าง)"/>
                            <Field
                                name="loanInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนสินเชื่อบุคคล บาทต่อเดือน"/>
                            <Field
                                name="loanExtraDebt"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนหนี้นอกระบบ บาทต่อเดือน"/>
                            <Field
                                name="extraDebt"
                                component={renderTextField}
                                type="number"
                                label="หนี้นอกระบบ (ยอดคงค้าง)"/>
                            <Field
                                name="loadExtraInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนสินเชื่อเช่าซื้ออื่นๆ บาทต่อเดือน"/>
                            <Field
                                name="cashCard"
                                component={renderOptionField}
                                label="บัตรกดเงินสด (ไม่ใช่บัตร ATM)"
                                options={[
                                {
                                    value: 'สมัครแล้วไม่ผ่าน',
                                    label: 'สมัครแล้วไม่ผ่าน'
                                }, {
                                    value: 'มี แต่วงเงินเต็ม',
                                    label: 'มี แต่วงเงินเต็ม'
                                }, {
                                    value: 'มี วงเงินเหลือ',
                                    label: 'มี วงเงินเหลือ'
                                }, {
                                    value: 'ไม่สมัคร',
                                    label: 'ไม่สมัคร'
                                }
                            ]}/>
                            <Field
                                name="cashDebt"
                                component={renderTextField}
                                type="number"
                                label="หนี้บัตรกดเงินสด (ยอดคงค้าง)"/>
                            <Field
                                name="cashInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนบัตรกดเงินสด บาทต่อเดือน"/>
                            <Field
                                name="loanTimeIn2Month"
                                component={renderOptionField}
                                label="ยื่นขอสินเชื่อ 2 เดือนย้อนหลัง ทั้งสิ้นกี่แห่ง"
                                options={[
                                {
                                    value: '0 ครั้ง',
                                    label: '0 ครั้ง'
                                }, {
                                    value: '1-2',
                                    label: '1-2'
                                }, {
                                    value: '3-5',
                                    label: '3-5'
                                }, {
                                    value: 'มากกว่า 5 ครั้ง',
                                    label: 'มากกว่า 5 ครั้ง'
                                }
                            ]}/>
                            <Field
                                name="familySpending"
                                component={renderTextField}
                                type="number"
                                label="ค่าเลี้ยงดูลูก/พ่อแม่/พี่น้อง/ญาติ รวมประมาณเท่าไรต่อเดือน"/>
                            <Field
                                name="merit"
                                component={renderTextField}
                                type="number"
                                label="ทำบุญประมาณเดือนละเท่าไร"/>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>
                                <button type="submit" className="btn btn-primary ml-2">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
}

RegisterPersonalForm = reduxForm({
    form: 'general',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    onSubmitFail: ((errors) => {
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterPersonalForm);

export default RegisterPersonalForm