import React from 'react';
import {Link} from 'react-router-dom'

const First = () => {
    return (
        <div className="row">
            <div className="firstContainer">
                <div className="fadeBg"></div>
                <h1>เงินยืม ไม่มีดอกเบี้ย คืนสิ้นเดือน</h1>
                <h3>MoneyDi</h3>
                <Link to="/register">
                    <span>ใบสมัคร</span>
                </Link>
            </div>
        </div>
    )
};

export default First;