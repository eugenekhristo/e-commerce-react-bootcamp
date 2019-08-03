import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...restProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...restProps} />
    <label
      className={`form-input-label ${restProps.value.length ? 'shrink' : ''}`}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
