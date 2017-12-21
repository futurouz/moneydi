import React from 'react';
import clock from './../img/clock.png';
import zero from './../img/zero.png'
import checkHand from './../img/checkHand.png';

const Second = () => {
    return (
        <div className="secondContainer text-center">
            <div className="row">
                <h1>เงินให้ยืม มันนี่ดิ</h1>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={clock} alt="clock" className="img-responsive"/>
                    <p>ผู้ที่ต้องการใช้เงินเดือนล่วงหน้า คืนสิ้นเดือน​</p>
                </div>
                <div className="col-md-4">
                    <img src={zero} alt="zero" className="img-responsive"/>
                    <p>เงินยืม ไม่มีดอกเบี้ย​​</p>
                </div>
                < div className="col-md-4">
                    <img src={checkHand} alt="checkHand" className="img-responsive"/>
                    <p>สมัครออนไลน์ รู้ผลและได้รับเงินใน 24ชม​</p>
                </div>
            </div>
        </div>
    )
};

export default Second;