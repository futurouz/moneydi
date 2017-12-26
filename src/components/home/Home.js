import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import HomeJumbotron from "./sections/HomeJumbotron";
import HomeFeature from "./sections/HomeFeature";
import HomeTable from "./sections/HomeTable";
import HomeQualification from "./sections/HomeQualification";
import HomeContact from "./sections/HomeContact";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeJumbotron/>
            <HomeFeature/>
            <HomeTable/>
            <HomeQualification/>
            <HomeContact/>
            <Footer/>
        </div>
    )
};

export default Home;