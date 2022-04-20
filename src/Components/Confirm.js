import React from 'react';
import './Confirm.module.css';

const Confirm = ({ text }) => {
  return (
    <div className="container">
      <h1 className="btn">{text}</h1>
      <button>X</button>
    </div>
  );
};

export default Confirm;
