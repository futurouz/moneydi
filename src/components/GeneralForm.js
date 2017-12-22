import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import firebase from 'firebase';
import Form from './Form'

class GeneralForm extends Component {
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCK4qBLbIUGCXf937tMgnzWy5kr_Bgqmwg",
            authDomain: "moneydi-f61bd.firebaseapp.com",
            databaseURL: "https://moneydi-f61bd.firebaseio.com",
            projectId: "moneydi-f61bd",
            storageBucket: "",
            messagingSenderId: "710399914064"
        })
    };

    submit(values, dispatch, props) {
        
        var date = new Date().toUTCString().replace(", ", " ")
        console.log(date)
        const dbRefObject = firebase.database().ref().child('users').child(date);
        dbRefObject.push().set(values);
        
        props.history.push('/thankyou');
    }

    render() {
        
        const {handleSubmit} = this.props;

        return (
            <Form>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>สมัครยืมเงินมันนี่ดิ</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-4 ">
                        <form onSubmit={handleSubmit(this.submit)}>
                            <div>
                                <label htmlFor="name">ชื่อ-นามสกุล</label>
                                <Field name="name" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="citizenId">เลขที่บัตรประชาชน</label>
                                <Field name="citizenId" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="mobileNo">โทรศัพท์มือถือ</label>
                                <Field name="mobileNo" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="lineId">LINE ID</label>
                                <Field name="lineId" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field name="email" component="input" type="email"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field name="email" component="input" type="email"/>
                            </div>
                            <div>
                                <label>ประเภทที่อยู่อาศัย</label>
                                <div>
                                    <label>
                                        <Field name="placeType" component="input" type="radio" value="บ้านเดี่ยว"/>{' '}
                                        บ้านเดี่ยว
                                    </label>
                                    <label>
                                        <Field name="placeType" component="input" type="radio" value="ทาวน์เฮ้าส์"/>{' '}
                                        ทาวน์เฮ้าส์
                                    </label>
                                    <label>
                                        <Field name="placeType" component="input" type="radio" value="คอนโดมิเนียม"/>{' '}
                                        คอนโดมิเนียม
                                    </label>
                                    <label>
                                        <Field name="placeType" component="input" type="radio" value="อพาร์ตเม้นท์"/>{' '}
                                        อพาร์ตเม้นท์
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>สถานะการพักอำศัย</label>
                                <div>
                                    <label>
                                        <Field name="placeStatus" component="input" type="radio" value="บ้านของตนเอง"/>{' '}
                                        บ้านของตนเอง
                                    </label>
                                    <label>
                                        <Field
                                            name="placeStatus"
                                            component="input"
                                            type="radio"
                                            value="บ้านบิดา/มารดา/ญาติ"/>{' '}
                                        บ้านบิดา/มารดา/ญาติ
                                    </label>
                                    <label>
                                        <Field
                                            name="placeStatus"
                                            component="input"
                                            type="radio"
                                            value="บ้านพักสวัสดิการ"/>{' '}
                                        บ้านพักสวัสดิการ
                                    </label>
                                    <label>
                                        <Field name="placeStatus" component="input" type="radio" value="เช่า"/>{' '}
                                        เช่า
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>การศึกษา</label>
                                <div>
                                    <label>
                                        <Field
                                            name="edu"
                                            component="input"
                                            type="radio"
                                            value="ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า"/>{' '}
                                        ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า
                                    </label>
                                    <label>
                                        <Field
                                            name="edu"
                                            component="input"
                                            type="radio"
                                            value="อนุปริญญา/ปวส./เทียบเท่า"/>{' '}
                                        อนุปริญญา/ปวส./เทียบเท่า
                                    </label>
                                    <label>
                                        <Field name="edu" component="input" type="radio" value="ปริญญาตรี"/>{' '}
                                        ปริญญาตรี
                                    </label>
                                    <label>
                                        <Field name="edu" component="input" type="radio" value="สูงกว่าปริญญาตรี"/>{' '}
                                        สูงกว่าปริญญาตรี
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>สถานะ</label>
                                <div>
                                    <label>
                                        <Field name="status" component="input" type="radio" value="โสด"/>{' '}
                                        โสด
                                    </label>
                                    <label>
                                        <Field name="status" component="input" type="radio" value="สมรสจดทะเบียน"/>{' '}
                                        สมรสจดทะเบียน
                                    </label>
                                    <label>
                                        <Field name="status" component="input" type="radio" value="สมรสไม่จดทะเบียน"/>{' '}
                                        สมรสไม่จดทะเบียน
                                    </label>
                                    <label>
                                        <Field name="status" component="input" type="radio" value="หย่า / หม้าย"/>{' '}
                                        หย่า / หม้าย
                                    </label>
                                </div>
                            </div>
                            {/* Section 2  */}
                            <h2>ข้อมูลคู่สมรส</h2>
                            <div>
                                <label htmlFor="coupleName">คู่สมรส: ชื่อ นามสกุล</label>
                                <Field name="coupleName" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="couplePlace">คู่สมรส: สถานที่ทำงาน</label>
                                <Field name="couplePlace" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="coupleWork">คู่สมรส: อาชีพ</label>
                                <Field name="coupleWork" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="couplePosition">คู่สมรส: ตำแหน่ง</label>
                                <Field name="couplePosition" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="coupleMobile">คู่สมรส: โทรศัพท์มือถือ</label>
                                <Field name="coupleMobile" component="input" type="number"/>
                            </div>
                            {/* Section 3  */}
                            <h2>บุคคลที่อนุญาตให้ติดต่อได้</h2>
                            <div>
                                <label htmlFor="contactName">ชื่อ บุคคลที่อนุญาตให้ติดต่อได้</label>
                                <Field name="contactName" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="contactMobile">โทรศัพท์มือถือ บุคคลที่อนุญาตให้ติดต่อได้</label>
                                <Field name="contactMobile" component="input" type="number"/>
                            </div>
                            <div>
                                <label>ความสัมพ้ันธ์</label>
                                <div>
                                    <label>
                                        <Field name="relation" component="input" type="radio" value="บิดา/มารดา"/>{' '}
                                        บิดา/มารดา
                                    </label>
                                    <label>
                                        <Field name="relation" component="input" type="radio" value="พี่น้อง"/>{' '}
                                        พี่น้อง
                                    </label>
                                    <label>
                                        <Field name="relation" component="input" type="radio" value="ญาติ"/>{' '}
                                        ญาติ
                                    </label>
                                    <label>
                                        <Field name="relation" component="input" type="radio" value="เพื่อนร่วมงาน"/>{' '}
                                        เพื่อนร่วมงาน
                                    </label>
                                </div>
                            </div>
                            {/* Section 4  */}
                            <h2>ข้อมูลอาชีพและรายได้</h2>
                            <div>
                                <label>อาชีพ</label>
                                <div>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="ครู/อาจารย์"/>{' '}
                                        ครู/อาจารย์
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="ตำรวจ/ทหาร"/>{' '}
                                        ตำรวจ/ทหาร
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="แพทย์"/>{' '}
                                        แพทย์
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="พยาบาล"/> {' '}
                                        พยาบาล
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="ธุรการ"/> {' '}
                                        ธุรการ
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="พนักงานสายการผลิต"/> {' '}
                                        พนักงานสายการผลิต
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="พนักงานบัญชี/การเงิน"/> {' '}
                                        พนักงานบัญชี/การเงิน
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="รักษาความปลอดภัย"/> {' '}
                                        รักษาความปลอดภัย
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="แม่บ้าน"/> {' '}
                                        แม่บ้าน
                                    </label>
                                    <label>
                                        <Field
                                            name="work"
                                            component="input"
                                            type="radio"
                                            value="เจ้าของกิจการ(จดทะเบียนนิติบุคคล)"/> {' '}
                                        เจ้าของกิจการ(จดทะเบียนนิติบุคคล)
                                    </label>
                                    <label>
                                        <Field
                                            name="work"
                                            component="input"
                                            type="radio"
                                            value="เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)"/> {' '}
                                        เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="พ่อค้า/แม่ค้า"/> {' '}
                                        พ่อค้า/แม่ค้า
                                    </label>
                                    <label>
                                        <Field
                                            name="work"
                                            component="input"
                                            type="radio"
                                            value="ขับแท็กซี่ วินมอเตอร์ไซด์"/> {' '}
                                        ขับแท็กซี่ วินมอเตอร์ไซด์
                                    </label>
                                    <label>
                                        <Field name="work" component="input" type="radio" value="ว่างงาน"/> {' '}
                                        ว่างงาน
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>สถานะการจ้างงาน</label>
                                <div>
                                    <label>
                                        <Field name="workStatus" component="input" type="radio" value="พนักงานประจำ"/>{' '}
                                        พนักงานประจำ
                                    </label>
                                    <label>
                                        <Field
                                            name="workStatus"
                                            component="input"
                                            type="radio"
                                            value="พนักงานชั่วคราว"/>{' '}
                                        พนักงานชั่วคราว
                                    </label>
                                    <label>
                                        <Field name="workStatus" component="input" type="radio" value="พนักงานรายวัน"/>{' '}
                                        พนักงานรายวัน
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="placeName">ชื่อสถานที่ทำงาน</label>
                                <Field name="placeName" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="placeAddress">ที่อยู่สถานที่ทำงาน หรือเว็บไซต์</label>
                                <Field name="placeAddress" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="placeMobile">โทรศัพท์ สถานที่ทำงาน</label>
                                <Field name="placeMobile" component="input" type="number"/>
                            </div>
                            <div>
                                <label>อายุงาน</label>
                                <div>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="1 เดือน"/>{' '}
                                        1 เดือน
                                    </label>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="2-4 เดือน"/>{' '}
                                        2-4 เดือน
                                    </label>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="5-11 เดือน"/>{' '}
                                        5-11 เดือน
                                    </label>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="1-2 ปี"/> {' '}
                                        1-2 ปี
                                    </label>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="3-5 ปี"/> {' '}
                                        3-5 ปี
                                    </label>
                                    <label>
                                        <Field name="workTime" component="input" type="radio" value="6 ปีขึ้นไป"/> {' '}
                                        6 ปีขึ้นไป
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="workPosition">ตำแหน่งงาน</label>
                                <Field name="workPosition" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="dept">แผนก/ฝ่าย</label>
                                <Field name="dept" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="income">รายได้ประจำ ต่อเดือน</label>
                                <Field name="income" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="overTime">ค่าล่วงเวลา ต่อเดือน</label>
                                <Field name="overTime" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="anotherIncome">รายได้อื่นๆต่อเดือน</label>
                                <Field name="anotherIncome" component="input" type="number"/>
                            </div>
                            <div>
                                <label>วิธีรับเงินเดือน</label>
                                <div>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="โอนผ่านธนาคาร"/>{' '}
                                        โอนผ่านธนาคาร
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="รับเป็นเช็ค"/>{' '}
                                        รับเป็นเช็ค
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="รับเป็นเงินสด"/>{' '}
                                        รับเป็นเงินสด
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>รับเงินเดือนเดือนละ</label>
                                <div>
                                    <label>
                                        <Field name="countToGetSalary" component="input" type="radio" value="1 ครั้ง"/>{' '}
                                        1 ครั้ง
                                    </label>
                                    <label>
                                        <Field name="countToGetSalary" component="input" type="radio" value="2 ครั้ง"/>{' '}
                                        2 ครั้ง
                                    </label>
                                    <label>
                                        <Field
                                            name="countToGetSalary"
                                            component="input"
                                            type="radio"
                                            value="มากกว่า 2 ครั้ง"/>{' '}
                                        มากกว่า 2 ครั้ง
                                    </label>
                                </div>
                            </div>
                            {/* Section 5 */}
                            <h2>ค่าใช้จ่าย</h2>
                            <div>
                                <label htmlFor="installment">ผ่อนรถ บาทต่อเดือน</label>
                                <Field name="Installment" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="rentHouse">ค่าเช่าบ้าน บาทต่อเดือน</label>
                                <Field name="rentHouse" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loanHouse">ผ่อนบ้าน บาทต่อเดือน</label>
                                <Field name="loanHouse" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loanCredit">ผ่อนบัตรเครดิต บาทต่อเดือน</label>
                                <Field name="loanCredit" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="creditDebt">หนี้บัตรเครดิต (ยอดคงค้าง)</label>
                                <Field name="creditDebt" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loanInstallment">ผ่อนสินเชื่อบุคคล บาทต่อเดือน</label>
                                <Field name="loanInstallment" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loanExtraDebt">ผ่อนหนี้นอกระบบ บาทต่อเดือน</label>
                                <Field name="loanExtraDebt" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="extraDebt">หนี้นอกระบบ (ยอดคงค้าง)</label>
                                <Field name="extraDebt" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loadExtraInstallment">ผ่อนสินเชื่อเช่าซื้ออื่นๆ บาทต่อเดือน</label>
                                <Field name="loadExtraInstallment" component="input" type="number"/>
                            </div>
                            <div>
                                <label>บัตรกดเงินสด (ไม่ใช่บัตรATM)</label>
                                <div>
                                    <label>
                                        <Field
                                            name="getSalary"
                                            component="input"
                                            type="radio"
                                            value="สมัครแล้วไม่ผ่าน"/>{' '}
                                        สมัครแล้วไม่ผ่าน
                                    </label>
                                    <label>
                                        <Field
                                            name="getSalary"
                                            component="input"
                                            type="radio"
                                            value="มี แต่วงเงินเต็ม"/>{' '}
                                        มี แต่วงเงินเต็ม
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="มี วงเงินเหลือ"/>{' '}
                                        มี วงเงินเหลือ
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="ไม่สมัคร"/>{' '}
                                        ไม่สมัคร
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cashDebt">หนี้บัตรกดเงินสด (ยอดคงค้าง)</label>
                                <Field name="cashDebt" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="loadCash">ผ่อนบัตรกดเงินสด บาทต่อเดือน</label>
                                <Field name="loadCash" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="inFamily">ค่าเลี้ยงดูลูก/พ่อแม่/พี่น้อง/ญาติ รวมประมาณเท่าไรต่อเดือน</label>
                                <Field name="inFamily" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="merit">ทำบุญประมาณเดือนละเท่าไร</label>
                                <Field name="merit" component="input" type="number"/>
                            </div>
                            <div>
                                <label>ยื่นขอสินเชื่อ 2 เดือนย้อนหลัง ทั้งสิ้นกี่แห่ง</label>
                                <div>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="0"/>{' '}
                                        0
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="1-2"/>{' '}
                                        1-2
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="3-5"/>{' '}
                                        3-5
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="6-10"/>{' '}
                                        6-10
                                    </label>
                                    <label>
                                        <Field name="getSalary" component="input" type="radio" value="10+"/>{' '}
                                        10+
                                    </label>
                                </div>
                            </div>
                            {/* Section 6 */}
                            <h2>เงินยืม</h2>
                            <div>
                                <label htmlFor="obective">จุดประสงค์ในการขอยืม</label>
                                <Field name="obective" component="input" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="limit">วงเงินที่ต้องการ (บาท)</label>
                                <Field name="limit" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="MinimumLimit">วงเงินขั้นต่ำที่ต้องการ (บาท)</label>
                                <Field name="MinimumLimit" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="promptPay">ต้องการโอนเงินเข้าบัญชีพร้อมเพย์ โปรดระบุตัวเลขบัตรประชาชนหรือเบอร์มือถือ</label>
                                <Field name="promptPay" component="input" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="bank">ต้องการโอนเงินเข้าบัญชีธนาคาร โปรดระบุชื่อธนาคาร ชื่อบัญชีและเลขที่บัญชี</label>
                                <Field name="bank" component="input" type="number"/>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </Form>
        )
    }
};

GeneralForm = reduxForm({form: 'general', destroyOnUnmount: false})(GeneralForm)

export default GeneralForm