import React from 'react';
import './DropdownMenu.scss';

const DropdownMenu = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default DropdownMenu;
