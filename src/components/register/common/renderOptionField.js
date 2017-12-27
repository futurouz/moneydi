import React from 'react'
import Field from "redux-form/es/Field";

const renderOptionField = ({ input, label, required, options, meta: { touched, error } }) => {
    return (
        <div className="form-group">
            <label className="title">{label} {required && '*'}</label>
            <div className={ `${touched && error && 'form-control is-invalid'}` }>
                {options.map(function(option, i){
                    return (
                        <div className="form-check form-check-inline" key={i}>
                            <label className="form-check-label">
                                <Field name={input.name} component="input" type="radio" value={option.value} className="form-check-input"/>
                                {' '}
                                {option.label}
                            </label>
                        </div>
                    );
                })}
            </div>
            {touched && error && <div className="option-invalid-feedback">{error}</div>}
        </div>
    );
};

export default renderOptionField