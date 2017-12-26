import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import firebase from 'firebase';
import Form from './Form'

class InfoForm extends Component {

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
            .push('/registerCon2');
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <Form>
                <div className="infoForm">
                    <div className="row">
                        <div className="col-md-4 offset-md-4 ">
                            <form onSubmit={handleSubmit(this.submit)}>
                                <div>
                                    <label htmlFor="citizenId">เลขที่บัตรประชาชน</label>
                                    <Field
                                        name="citizenId"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="age">อายุ</label>
                                    <Field name="age" component="input" type="number" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="address">ที่อยู่ปัจจุบัน</label>
                                    <Field name="address" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="province">จังหวัด</label>
                                    <Field name="province" component="input" type="text" className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>ที่อยู่ปัจจุบันอยู่มานานเท่าไร</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="addressAge" component="input" type="radio" value="1 เดือน"/>{' '}
                                            1 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="addressAge" component="input" type="radio" value="2-5 เดือน"/>{' '}
                                            2 - 5 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="addressAge" component="input" type="radio" value="6-12 เดือน"/>{' '}
                                            6 - 12 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="addressAge" component="input" type="radio" value="1-2 ปี"/>{' '}
                                            1-2 ปี
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="addressAge" component="input" type="radio" value="มากกว่า 2 ปี"/>{' '}
                                            มากกว่า 2 ปี
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>เบอร์มือถือใช้มานานเท่าไร</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="mobileAge" component="input" type="radio" value="1 เดือน"/>{' '}
                                            1 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="mobileAge" component="input" type="radio" value="2-5 เดือน"/>{' '}
                                            2 - 5 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="mobileAge" component="input" type="radio" value="6-12 เดือน"/>{' '}
                                            6 - 12 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="mobileAge" component="input" type="radio" value="1-2 ปี"/>{' '}
                                            1-2 ปี
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="mobileAge" component="input" type="radio" value="มากกว่า 2 ปี"/>{' '}
                                            มากกว่า 2 ปี
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="lineId">LINE ID</label>
                                    <Field name="lineId" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" component="input" type="email" className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>ประเภทที่อยู่อาศัย</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="placeType" component="input" type="radio" value="บ้านเดี่ยว"/>{' '}
                                            บ้านเดี่ยว
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="placeType" component="input" type="radio" value="ทาวน์เฮ้าส์"/>{' '}
                                            ทาวน์เฮ้าส์
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="placeType" component="input" type="radio" value="คอนโดมิเนียม"/>{' '}
                                            คอนโดมิเนียม
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="placeType" component="input" type="radio" value="อพาร์ตเม้นท์"/>{' '}
                                            อพาร์ตเม้นท์
                                        </label>
                                    </div>
                                </div>

                                <div className="form-check form-check-inline">
                                    <label>สถานะการพักอำศัย</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="placeStatus" component="input" type="radio" value="บ้านของตนเอง"/>{' '}
                                            บ้านของตนเอง
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="placeStatus"
                                                component="input"
                                                type="radio"
                                                value="บ้านบิดา/มารดา/ญาติ"/>{' '}
                                            บ้านบิดา/มารดา/ญาติ
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="placeStatus"
                                                component="input"
                                                type="radio"
                                                value="บ้านพักสวัสดิการ"/>{' '}
                                            บ้านพักสวัสดิการ
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="placeStatus" component="input" type="radio" value="เช่า"/>{' '}
                                            เช่า
                                        </label>
                                    </div>
                                </div>

                                <div className="form-check form-check-inline">
                                    <label>การศึกษา</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field
                                                name="edu"
                                                component="input"
                                                type="radio"
                                                value="ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า"/>{' '}
                                            ต่ำกว่ามัธยมปลาย/ปวช./เทียบเท่า
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="edu"
                                                component="input"
                                                type="radio"
                                                value="อนุปริญญา/ปวส./เทียบเท่า"/>{' '}
                                            อนุปริญญา/ปวส./เทียบเท่า
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="edu" component="input" type="radio" value="ปริญญาตรี"/>{' '}
                                            ปริญญาตรี
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="edu" component="input" type="radio" value="สูงกว่าปริญญาตรี"/>{' '}
                                            สูงกว่าปริญญาตรี
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>สถานะ</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="status" component="input" type="radio" value="โสด"/>{' '}
                                            โสด
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="status" component="input" type="radio" value="สมรสจดทะเบียน"/>{' '}
                                            สมรสจดทะเบียน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="status" component="input" type="radio" value="สมรสไม่จดทะเบียน"/>{' '}
                                            สมรสไม่จดทะเบียน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="status" component="input" type="radio" value="หย่า / หม้าย"/>{' '}
                                            หย่า / หม้าย
                                        </label>
                                    </div>
                                </div>
                                <h2>ข้อมูลคู่สมรส</h2>
                                <div>
                                    <label htmlFor="coupleFirstName">ชื่อ</label>
                                    <Field
                                        name="coupleFirstName"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="coupleLastName">นามสกุล</label>
                                    <Field
                                        name="coupleLastName"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="couplePlace">ชื่อสถานที่ทำงาน</label>
                                    <Field
                                        name="couplePlace"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="coupleWork">อาชีพ</label>
                                    <Field
                                        name="coupleWork"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="couplePosition">ตำแหน่ง</label>
                                    <Field
                                        name="couplePosition"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="coupleMobile">โทรศัพท์มือถือ</label>
                                    <Field
                                        name="coupleMobile"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="coupleSalary">รายได้ (ต่อเดือน)</label>
                                    <Field
                                        name="coupleSalary"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <h2>บุคคลที่อนุญาตให้ติดต่อได้ (ไม่ใช่คู่สมรส)</h2>
                                <div>
                                    <label htmlFor="contactFirstName">ชื่อ</label>
                                    <Field
                                        name="contactFirstName"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="contactLastName">นามสกุล</label>
                                    <Field
                                        name="contactLastName"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="contactMobile">โทรศัพท์มือถือ</label>
                                    <Field
                                        name="contactMobile"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>ความสัมพ้ันธ์</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="relation" component="input" type="radio" value="บิดา/มารดา"/>{' '}
                                            บิดา/มารดา
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="relation" component="input" type="radio" value="พี่น้อง"/>{' '}
                                            พี่น้อง
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="relation" component="input" type="radio" value="ญาติ"/>{' '}
                                            ญาติ
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="relation" component="input" type="radio" value="เพื่อนร่วมงาน"/>{' '}
                                            เพื่อนร่วมงาน
                                        </label>
                                    </div>
                                </div>
                                <h2>ข้อมูลอาชีพและรายได้</h2>
                                <div className="form-check form-check-inline">
                                    <label>อาชีพ</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="ครู/อาจารย์"/>{' '}
                                            ครู/อาจารย์
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="ตำรวจ/ทหาร"/>{' '}
                                            ตำรวจ/ทหาร
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="แพทย์"/>{' '}
                                            แพทย์
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="พยาบาล"/> {' '}
                                            พยาบาล
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="ธุรการ"/> {' '}
                                            ธุรการ
                                        </label>
                                        <label className="form-check-label">  
                                            <Field name="work" component="input" type="radio" value="พนักงานสายการผลิต"/> {' '}
                                            พนักงานสายการผลิต
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="พนักงานบัญชี/การเงิน"/> {' '}
                                            พนักงานบัญชี/การเงิน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="รักษาความปลอดภัย"/> {' '}
                                            รักษาความปลอดภัย
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="แม่บ้าน"/> {' '}
                                            แม่บ้าน
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="work"
                                                component="input"
                                                type="radio"
                                                value="เจ้าของกิจการ(จดทะเบียนนิติบุคคล)"/> {' '}
                                            เจ้าของกิจการ(จดทะเบียนนิติบุคคล)
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="work"
                                                component="input"
                                                type="radio"
                                                value="เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)"/> {' '}
                                            เจ้าของกิจการ/ร้านค้า(ไม่จดทะเบียนนิติบุคคล)
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="พ่อค้า/แม่ค้า"/> {' '}
                                            พ่อค้า/แม่ค้า
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="work"
                                                component="input"
                                                type="radio"
                                                value="ขับแท็กซี่ วินมอเตอร์ไซด์"/> {' '}
                                            ขับแท็กซี่ วินมอเตอร์ไซด์
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="work" component="input" type="radio" value="ว่างงาน"/> {' '}
                                            ว่างงาน
                                        </label>
                                    </div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>สถานะการจ้างงาน</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="workStatus" component="input" type="radio" value="พนักงานประจำ"/>{' '}
                                            พนักงานประจำ
                                        </label>
                                        <label className="form-check-label">
                                            <Field
                                                name="workStatus"
                                                component="input"
                                                type="radio"
                                                value="พนักงานชั่วคราว"/>{' '}
                                            พนักงานชั่วคราว
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workStatus" component="input" type="radio" value="พนักงานรายวัน"/>{' '}
                                            พนักงานรายวัน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workStatus" component="input" type="radio" value="ว่างงาน"/>{' '}
                                            ว่างงาน
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="placeName">ชื่อสถานที่ทำงาน</label>
                                    <Field name="placeName" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="placeAddress">ที่อยู่สถานที่ทำงาน หรือเว็บไซต์</label>
                                    <Field
                                        name="placeAddress"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="placeMobile">โทรศัพท์</label>
                                    <Field
                                        name="placeMobile"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>จำนวนพนักงานในที่ทำงาน</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="1 คน"/>{' '}
                                            1 คน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="2-10 คน"/>{' '}
                                            2-10 คน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="11-50 คน"/>{' '}
                                            11-50 คน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="51-100 คน"/> {' '}
                                            51-100 คน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="101-1000 คน"/> {' '}
                                            101-1000 คน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="amoutOfEmplo" component="input" type="radio" value="มากกว่า 1000"/> {' '}
                                            มากกว่า 1000
                                        </label>
                                    </div>
                                </div>

                                <div className="form-check form-check-inline">
                                    <label>อายุงาน</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="1 เดือน"/>{' '}
                                            1 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="2-4 เดือน"/>{' '}
                                            2-4 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="5-11 เดือน"/>{' '}
                                            5-11 เดือน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="1-2 ปี"/> {' '}
                                            1-2 ปี
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="3-5 ปี"/> {' '}
                                            3-5 ปี
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="workTime" component="input" type="radio" value="6 ปีขึ้นไป"/> {' '}
                                            6 ปีขึ้นไป
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="workPosition">ตำแหน่งงาน</label>
                                    <Field
                                        name="workPosition"
                                        component="input"
                                        type="text"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="dept">แผนก/ฝ่าย</label>
                                    <Field name="dept" component="input" type="text" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="income">รายได้ประจำ ต่อเดือน</label>
                                    <Field name="income" component="input" type="number" className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="overTime">ค่าล่วงเวลา ต่อเดือน</label>
                                    <Field
                                        name="overTime"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="anotherIncome">รายได้อื่นๆต่อเดือน</label>
                                    <Field
                                        name="anotherIncome"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>วิธีรับเงินเดือน</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="getSalary" component="input" type="radio" value="โอนผ่านธนาคาร"/>{' '}
                                            โอนผ่านธนาคาร
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="getSalary" component="input" type="radio" value="รับเป็นเช็ค"/>{' '}
                                            รับเป็นเช็ค
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="getSalary" component="input" type="radio" value="รับเป็นเงินสด"/>{' '}
                                            รับเป็นเงินสด
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="countToGetSalary">รับเงินเดือนเดือนละ (ครั้ง)</label>
                                    <Field
                                        name="countToGetSalary"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="countToGetSalary">รับเงินวันที่</label>
                                    <Field
                                        name="countToGetSalary"
                                        component="input"
                                        type="date"
                                        className="form-control"/>
                                </div>

                                <h2>ค่าใช้จ่าย</h2>
                                <div>
                                    <label htmlFor="installment">ผ่อนรถ บาทต่อเดือน</label>
                                    <Field
                                        name="Installment"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="rentHouse">ค่าเช่าบ้าน บาทต่อเดือน</label>
                                    <Field
                                        name="rentHouse"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loanHouse">ผ่อนบ้าน บาทต่อเดือน</label>
                                    <Field
                                        name="loanHouse"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loanCredit">ผ่อนบัตรเครดิต บาทต่อเดือน</label>
                                    <Field
                                        name="loanCredit"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="creditDebt">หนี้บัตรเครดิต (ยอดคงค้าง)</label>
                                    <Field
                                        name="creditDebt"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loanInstallment">ผ่อนสินเชื่อบุคคล บาทต่อเดือน</label>
                                    <Field
                                        name="loanInstallment"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loanExtraDebt">ผ่อนหนี้นอกระบบ บาทต่อเดือน</label>
                                    <Field
                                        name="loanExtraDebt"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="extraDebt">หนี้นอกระบบ (ยอดคงค้าง)</label>
                                    <Field
                                        name="extraDebt"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loadExtraInstallment">ผ่อนสินเชื่อเช่าซื้ออื่นๆ บาทต่อเดือน</label>
                                    <Field
                                        name="loadExtraInstallment"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div >
                                    <label>บัตรกดเงินสด (ไม่ใช่บัตรATM)</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="cashCard" component="input" type="radio" value="สมัครแล้วไม่ผ่าน"/>{' '}
                                            สมัครแล้วไม่ผ่าน
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="cashCard" component="input" type="radio" value="มี แต่วงเงินเต็ม"/>{' '}
                                            มี แต่วงเงินเต็ม
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="cashCard" component="input" type="radio" value="มี วงเงินเหลือ"/>{' '}
                                            มี วงเงินเหลือ
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="cashCard" component="input" type="radio" value="ไม่สมัคร"/>{' '}
                                            ไม่สมัคร
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="cashDebt">หนี้บัตรกดเงินสด (ยอดคงค้าง)</label>
                                    <Field
                                        name="cashDebt"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="loadCash">ผ่อนบัตรกดเงินสด บาทต่อเดือน</label>
                                    <Field
                                        name="loadCash"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label>ยื่นขอสินเชื่อ 2 เดือนย้อนหลัง ทั้งสิ้นกี่แห่ง</label>
                                    <div>
                                        <label className="form-check-label">
                                            <Field name="timeForInstallment" component="input" type="radio" value="0"/>{' '}
                                            0 ครั้ง
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="timeForInstallment" component="input" type="radio" value="1-2"/>{' '}
                                            1-2
                                        </label>
                                        <label className="form-check-label">
                                            <Field name="timeForInstallment" component="input" type="radio" value="3-5"/>{' '}
                                            3-5
                                        </label>
                                        <label>
                                            <Field
                                                name="timeForInstallment"
                                                component="input"
                                                type="radio"
                                                value="มากกว่า 5 ครั้ง"/>{' '}
                                            มากกว่า 5 ครั้ง
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="inFamily">ค่าเลี้ยงดูลูก/พ่อแม่/พี่น้อง/ญาติ รวมประมาณเท่าไรต่อเดือน</label>
                                    <Field
                                        name="inFamily"
                                        component="input"
                                        type="number"
                                        className="form-control"/>
                                </div>
                                <div>
                                    <label htmlFor="merit">ทำบุญประมาณเดือนละเท่าไร</label>
                                    <Field name="merit" component="input" type="number" className="form-control"/>
                                </div>
                                <button type="submit" className="btn">Next</button>
                            </form>
                        </div>
                    </div>
                         <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-info info_progress"
                                    role="progressbar"
                                    aria-valuenow="66"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    หน้า 2 จาก 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )
    };
};

InfoForm = reduxForm({form: 'general', destroyOnUnmount: false})(InfoForm)

export default InfoForm