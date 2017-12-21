import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const First = () => {
    return (
        <div className="row">
            <div className="firstContainer">
                <h1>เงินยืม ไม่มีดอกเบี้ย คืนสิ้นเดือน</h1>
                <h3>MoneyDi</h3>
                <Link to="/MoneyDiApp">
                    <a href="#">ใบสมัคร</a>
                </Link>
            </div>
        </div>
    )
};

export default First;