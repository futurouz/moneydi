import React from 'react'

const renderTextField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input {...input} type={type} className={ `form-control ${touched && error && 'is-invalid'}` } />
                {touched && error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default renderTextField