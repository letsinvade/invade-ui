import React from 'react';
import './Button.scss';

const Button = ({children, className, ...rest}) => {
    return (
        <button
            className={`Button ${className}`}
            {...rest}>
            {children}
        </button>
    )
};

export default Button
