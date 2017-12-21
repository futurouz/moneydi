import React from 'react';
import Navbar from './common/Navbar';
import First from './First';
import Second from './Second';
import Third from './Third';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
        </div>
    )
};

export default Home;