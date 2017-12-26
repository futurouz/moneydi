import React from 'react';
import {Link} from 'react-router-dom'

const Fourth = () => {
    return (
        <div className="fourthContainer" id="qualification">
            <div className="row">
                <div className="col-md-12">
                    <h3>คุณสมบัติผู้สมัคร</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        <li>สัญชาติไทย อายุ 21 ปีขึ้นไป</li>
                        <li>ทำงานอยู่ในกทม.และปริมณฑล</li>
                        <li>มีรายได้ต่อเดือนตั้งแต่ 15,000 บาทขึ้นไป และมีอายุงานตั้งแต่ 4 เดือนขึ้นไป</li>
                        <li>มีเหตุใช้เงินด่วน/ฉุกเฉิน พร้อมคืนสิ้นเดือนเมื่อได้เงินเดือน</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h4>ก่อนสมัครเตรียม 4 อย่างนี้ให้พร้อม</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ol>
                        <li>บัตรประชาชน</li>
                        <li>สลิปเงินเดือน</li>
                        <li>หลักฐานสำหรับวัตถุประสงค์ในการขอสินเชื่อบัญชีธนาคารที่เป็นบัญชีเงินเดือนย้อนหลัง
                            3 เดือน</li>
                        <li>บัญชีธนาคารที่เป็นบัญชีเงินเดือนย้อนหลัง 3 เดือน</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Link to="/register">
                        <span>ใบสมัคร</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Fourth