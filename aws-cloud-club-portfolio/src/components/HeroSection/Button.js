import React from 'react';

const Button = ({ buttonSize, buttonColor, children }) => {
    return (
        <button className={`btn ${buttonSize} ${buttonColor}`}>
            {children}
        </button>
    );
};

export default Button; // Ensure that Button component is exported as default
