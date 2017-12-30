import React from 'react'

const renderTextField = ({ input, label, type, maxLength, help, required, disabled, meta: { touched, error } }) => {
    const isNumberInput = type === "number";
    return (
        <div className="form-group">
            <label className="title">{label} {required && '*'}</label>
            <div>
                <input {...input} type={type} maxLength={maxLength} disabled={disabled} min={isNumberInput ? "0" : "false"} className={ `form-control ${touched && error && 'is-invalid'}` } />
                {touched && error && <div className="invalid-feedback">{error}</div>}
                {help && <small id="emailHelp" className="form-text text-muted">{help}</small>}
            </div>
        </div>
    );
};

export default renderTextField