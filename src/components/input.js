import React from 'react';

const Input = (name, state, onChange) => {
  return (
    <div className="input">
      <input name={name} value={state} onChange={onChange}/>
      <label>{title}</label>
    </div>
    
    )
}

export default Input;