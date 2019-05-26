import React from 'react';
import './DropdownToggler.scss';

const DropdownToggler = ({children, className, ...rest}) => {
    return (
        <button className={className}
             {...rest}>
            {children}
        </button>
    )
};

export default DropdownToggler;
