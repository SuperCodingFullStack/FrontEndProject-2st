import React from 'react';
import './Inputs.css';

const Inputs = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md p-2 inputs outline-none"
    ></input>
  );
};

export default Inputs;
