import React from 'react';

const Third = () => {
    return (
        <div className="row">
            <div className="thirdContainer">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td></td>
                            <td>เงินยืมมันนี่ดิ</td>
                            <td>สินเชื่อบุคคลทั่วไป</td>
                            <td>บัตรกดเงินสด</td>
                        </tr>
                        <tr>
                            <td>ดอกเบี้ยและค่าธรรมเนียม</td>
                            <td>ไม่มีดอกเบี้ยและค่าธรรมเนียม 28% ถ้าผิดนัดชำระ</td>
                            <td>สูงสุด 28%</td>
                            <td>สูงสุด 28%</td>
                        </tr>
                        <tr>
                            <td>ค่าอากรสแตมป์</td>
                            <td colSpan="3">1 บาท ต่อเงินกู้ 1,000 บาท</td>
                        </tr>
                        <tr>
                            <td>ค่าใช้จ่ายในการติดตามทวงหนี้</td>
                            <td colSpan="3">100 บาท/เดือน</td>
                        </tr>
                        <tr>
                            <td>ค่าธรรมเนียมจ่ายเงิน</td>
                            <td>ไม่เสีย จ่ายผ่านพร้อมเพย์</td>
                            <td>10-30 บาท</td>
                            <td>10-30 บาท</td>
                        </tr>
                        <tr>
                            <td>วงเงินสูงสุด</td>
                            <td>ไม่เกิน 4,500 บาท</td>
                            <td>5 เท่าของเงินเดือน</td>
                            <td>4 เท่าของเงินเดือน</td>
                        </tr>
                        <tr>
                            <td>ช่องทางสมัคร</td>
                            <td>ออนไลน์</td>
                            <td colSpan="2">สาขา หรือส่งเอกสารผ่านแมสเซนเจอร์หรือไปรษณีย์</td>
                        </tr>
                        <tr>
                            <td>ระยะเวลาสินเชื่อ</td>
                            <td>คืนสิ้นเดือน</td>
                            <td>1-5 ปี</td>
                            <td>1วัน-5ปี</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Third;