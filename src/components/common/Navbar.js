import React from 'react'
import logo from './../../img/logo.jpg';


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src={logo} width="40px;"/>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">หน้าแรก
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#product">ผลิตภัณฑ์</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#qualification">คุณสมบัติผู้สมัคร</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#aboutus">เกี่ยวกับเรา</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;