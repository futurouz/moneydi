import React from 'react';
import Navbar from './common/Navbar';

const Form = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
};

export default Form