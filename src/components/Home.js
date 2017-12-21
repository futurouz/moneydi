import React from 'react';
import Navbar from './common/Navbar';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
            <Footer/>
        </div>
    )
};

export default Home;