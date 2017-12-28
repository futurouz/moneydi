import React from 'react'

const renderFileField = ({ input, label, type, maxLength, help, required, meta: { touched, error } }) => {
    const { value, ...inputProps } = input;

    const handleChange = (e) => {
        input.onChange(e.target.files[0])
    };

    return (
        <div className="form-group">
            <label className="title">{label} {required && '*'}</label>
            <div>
                <input {...input} type={type} maxLength={maxLength} className={ `form-control ${touched && error && 'is-invalid'}` } />
                {touched && error && <div className="invalid-feedback">{error}</div>}
                {help && <small id="emailHelp" className="form-text text-muted">{help}</small>}
            </div>
        </div>
    );
};

export default renderFileField