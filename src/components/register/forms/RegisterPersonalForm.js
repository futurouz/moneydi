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
                            {/* Progress Bar */}
                            <div className="page">หน้า 2/3</div>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info personal_form"
                                    role="progressbar"
                                    aria-valuenow="66"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    66%
                                </div>
                            </div>

                            {/* Personal */}
                            <h2>ประวัติส่วนตัวผู้สมัคร</h2>

                            <Field
                                name="citizenId"
                                component={renderTextField}
                                type="text"
                                label="เลขที่บัตรประชาชน"
                                required={true}
                                autoFocus={true}/>
                            <Field
                                name="age"
                                component={renderTextField}
                                type="text"
                                label="อายุ"
                                required={true}/>
                            <Field
                                name="address"
                                component={renderTextField}
                                type="text"
                                label="ที่อยู่ปัจจุบัน"
                                required={true}/>
                            <Field
                                name="province"
                                component={renderTextField}
                                type="text"
                                label="จังหวัด"
                                required={true}/>
                            <Field
                                name="addressAge"
                                component={renderOptionField}
                                label="ที่อยู่ปัจจุบันอยู่มานานเท่าไร"
                                required={true}
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
                                }]}/>
                            <Field
                                name="mobileAge"
                                component={renderOptionField}
                                label="เบอร์มือถือใช้มานานเท่าไร"
                                required={true}
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
                                name="lineId"
                                component={renderTextField}
                                type="text"
                                label="LINE ID"
                                required={true}/>
                            <Field
                                name="email"
                                component={renderTextField}
                                type="text"
                                label="Email"
                                required={true}/>
                            <Field
                                name="homeType"
                                component={renderOptionField}
                                label="ประเภทที่อยู่อาศัย"
                                required={true}
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
                                label="สถานะการพักอาศัย"
                                required={true}
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
                                required={true}
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
                                name="marriageStatus"
                                component={renderOptionField}
                                label="สถานภาพ"
                                required={true}
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
                            ]}/>
                            <Field
                                name="hasMobileBanking"
                                component={renderOptionField}
                                label="คุณมีแอปธนาคาร/โมบายแบงกิ้ง เช่น K Plus, SCB Easy หรือไม่"
                                required={true}
                                options={[
                                    {
                                        value: 'มี',
                                        label: 'มี'
                                    }, {
                                        value: 'ไม่มี',
                                        label: 'ไม่มี'
                                    }
                                ]}/>
                            <Field
                                name="referenceContact"
                                component={renderTextField}
                                type="text"
                                label="ถ้ามีคนที่เคยยืมเงินมันนี่ดิแนะนำมาสมัคร โปรดใส่ชื่อนามสกุล หรือเบอร์มือถือ"/>

                            {/* Spouse */}
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
                                label="รายได้ (ต่อเดือน)"/>

                            {/* Contact */}
                            <h2>บุคคลที่อนุญาตให้ติดต่อได้ (ไม่ใช่คู่สมรส)</h2>

                            <Field
                                name="contactFirstName"
                                component={renderTextField}
                                type="text"
                                label="ชื่อ"
                                required={true}/>
                            <Field
                                name="contactLastName"
                                component={renderTextField}
                                type="text"
                                label="นามสกุล"
                                required={true}/>
                            <Field
                                name="contactMobile"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์มือถือ"
                                required={true}/>
                            <Field
                                name="relation"
                                component={renderOptionField}
                                label="ความสัมพันธ์"
                                required={true}
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
                            ]}/>

                            {/* occupation */}
                            <h2>ข้อมูลอาชีพและรายได้</h2>

                            <Field
                                name="work"
                                component={renderOptionField}
                                label="อาชีพ"
                                required={true}
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
                                    value: 'รักษาความปลอดภัย',
                                    label: 'รักษาความปลอดภัย'
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
                                label="สถานะการจ้างงาน"
                                required={true}
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
                                label="ชื่อสถานที่ทำงาน"
                                required={true}/>
                            <Field
                                name="workAddress"
                                component={renderTextField}
                                type="text"
                                label="ที่อยู่สถานที่ทำงาน"
                                required={true}/>
                            <Field
                                name="workMobile"
                                component={renderTextField}
                                type="text"
                                label="โทรศัพท์"
                                required={true}/>
                            <Field
                                name="amountOfEmployee"
                                component={renderOptionField}
                                label="จำนวนพนักงานในที่ทำงาน"
                                required={true}
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
                                name="workAge"
                                component={renderOptionField}
                                label="อายุงาน"
                                required={true}
                                options={[
                                    {
                                        value: '1 เดือน',
                                        label: '1 เดือน'
                                    }, {
                                        value: '2-4 เดือน',
                                        label: '2-4 เดือน'
                                    }, {
                                        value: '5-11 เดือน',
                                        label: '5-11 เดือน'
                                    }, {
                                        value: '1-2 ปี',
                                        label: '1-2 ปี'
                                    }, {
                                        value: '3-5 ปี',
                                        label: '3-5 ปี'
                                    }, {
                                        value: '6 ปีขึ้นไป',
                                        label: '6 ปีขึ้นไป'
                                    }
                                ]}/>
                            <Field
                                name="workPosition"
                                component={renderTextField}
                                type="text"
                                label="ตำแหน่งงาน"
                                required={true}/>
                            <Field
                                name="workDepartment"
                                component={renderTextField}
                                type="text"
                                label="แผนก/ฝ่าย"
                                required={true}/>
                            <Field
                                name="income"
                                component={renderTextField}
                                type="number"
                                label="รายได้ประจำ ต่อเดือน"
                                required={true}/>
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
                                name="lastMonthIncome"
                                component={renderTextField}
                                type="number"
                                label="ยอดที่ได้รับจากบริษัทเดือนล่าสุด"/>
                            <Field
                                name="salaryMethod"
                                component={renderOptionField}
                                label="วิธีรับเงินเดือน"
                                required={true}
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
                                component={renderOptionField}
                                label="รับเงินเดือนเดือนละ (ครั้ง)"
                                required={true}
                                options={[
                                    {
                                        value: '1 ครั้ง',
                                        label: '1 ครั้ง'
                                    }, {
                                        value: '2 ครั้ง',
                                        label: '2 ครั้ง'
                                    }, {
                                        value: 'มากกว่า 2 ครั้ง',
                                        label: 'มากกว่า 2 ครั้ง'
                                    }
                                ]}/>
                            <Field
                                name="getSalaryDate"
                                component={renderOptionField}
                                label="เงินเดือนออกวันที่"
                                required={true}
                                options={[
                                    {
                                        value: 'วันสุดท้าย',
                                        label: 'วันสุดท้าย'
                                    }, {
                                        value: '25',
                                        label: '25'
                                    }, {
                                        value: '26',
                                        label: '26'
                                    }, {
                                        value: '27',
                                        label: '27'
                                    }, {
                                        value: '28',
                                        label: '28'
                                    }, {
                                        value: '29',
                                        label: '29'
                                    }, {
                                        value: '1',
                                        label: '1'
                                    }, {
                                        value: '2',
                                        label: '2'
                                    }, {
                                        value: '3',
                                        label: '3'
                                    }, {
                                        value: '4',
                                        label: '4'
                                    }, {
                                        value: '5',
                                        label: '5'
                                    }
                                ]}/>

                            {/* outcome */}
                            <h2>ค่าใช้จ่าย</h2>

                            <Field
                                name="rentHouse"
                                component={renderTextField}
                                type="number"
                                label="ค่าเช่าบ้าน บาทต่อเดือน"/>
                            <Field
                                name="houseInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนบ้าน บาทต่อเดือน"/>
                            <Field
                                name="carInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนรถ บาทต่อเดือน"/>
                            <Field
                                name="loanInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนสินเชื่อส่วนบุคคล บาทต่อเดือน"/>
                            <Field
                                name="loadExtraInstallment"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนสินเชื่อเช่าซื้ออื่นๆ บาทต่อเดือน"/>
                            <Field
                                name="creditDebt"
                                component={renderTextField}
                                type="number"
                                label="ยอดหนี้บัตรเครดิตคงค้าง"/>
                            <Field
                                name="loanCredit"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนบัตรเครดิต บาทต่อเดือน"/>
                            <Field
                                name="loanCoop"
                                component={renderTextField}
                                type="number"
                                label="ยอดหนี้ยืมบริษัทหรือสหกรณ์"/>
                            <Field
                                name="loanFriend"
                                component={renderTextField}
                                type="number"
                                label="ยอดหนี้ยืมเพื่อนหรือคนรู้จัก"/>
                            <Field
                                name="extraDebt"
                                component={renderTextField}
                                type="number"
                                label="ยอดหนี้นอกระบบคงค้าง"/>
                            <Field
                                name="loanExtraDebt"
                                component={renderTextField}
                                type="number"
                                label="ผ่อนหนี้นอกระบบ บาทต่อเดือน"/>
                            <Field
                                name="cashCard"
                                component={renderOptionField}
                                label="บัตรกดเงินสด (ไม่ใช่บัตร ATM)"
                                required={true}
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
                                required={true}
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
                            <Field
                                name="withdrawAfterSalary"
                                component={renderOptionField}
                                label="เวลาเงินเดือนเข้า คุณจะถอนเงิน"
                                required={true}
                                options={[
                                    {
                                        value: 'ถอนออกทั้งหมดเป็นเงินสดทันที',
                                        label: 'ถอนออกทั้งหมดเป็นเงินสดทันที'
                                    }, {
                                        value: 'ถอนเท่าที่ใช้',
                                        label: 'ถอนเท่าที่ใช้'
                                    }
                                ]}/>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary" onClick={previousPage}>ก่อนหน้า</button>
                                <button type="submit" className="btn btn-primary ml-2">ถัดไป</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
}

RegisterPersonalForm = reduxForm({
    form: 'apply',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    onSubmitFail: ((errors) => {
        if(!errors) return;
        let arrayError = Object.keys(errors);
        let target = document.querySelector(`input[name="${arrayError[0]}"]`);
        target.scrollIntoView({behavior: "auto", block: "center", inline: "nearest"});
    })
})(RegisterPersonalForm);

export default RegisterPersonalForm