import React from 'react';
import {Link} from 'react-router-dom'

const Fourth = () => {
    return (
        <div className="fourthContainer">
            <div className="row">
                <h1>คุณสมบัติผู้สมัคร</h1>
            </div>
            <div className="row">
                <ul>
                    <li>สัญชาติไทย อายุ 21 ปีขึ้นไป</li>
                    <li>ทำงานอยู่ในกทม.และปริมณฑล</li>
                    <li>มีรายได้ต่อเดือนตั้งแต่ 15,000 บาทขึ้นไป และมีอายุงานตั้งแต่ 4 เดือนขึ้นไป</li>
                    <li>มีเหตุใช้เงินด่วน/ฉุกเฉิน พร้อมคืนสิ้นเดือนเมื่อได้เงินเดือน</li>
                </ul>
            </div>
            <div className="row">
                <h3>ก่อนสมัครเตรียม 4 อย่างนี้ให้พร้อม</h3>
            </div>
            <div className="row">
                <ol>
                    <li>บัตรประชาชน</li>
                    <li>สลิปเงินเดือน</li>
                    <li>หลักฐานสำหรับวัตถุประสงค์ในการขอสินเชื่อบัญชีธนาคารที่เป็นบัญชีเงินเดือนย้อนหลัง
                        3 เดือน</li>
                    <li>บัญชีธนาคารที่เป็นบัญชีเงินเดือนย้อนหลัง 3 เดือน</li>
                </ol>
            </div>
            <div className="row">
                <Link to="/MoneyDiApp">
                    <span>ใบสมัคร</span>
                </Link>
            </div>
        </div>
    );
};

export default Fourth