import React from 'react'

const renderOptionField = ({ input, label, options, meta: { touched, error } }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
            {options.map(function(option, i){
                return (
                    <div className="form-check form-check-inline" key={i}>
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name={input.name} id="inlineRadio1" value={option.value}/> {option.label}
                        </label>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default renderOptionField