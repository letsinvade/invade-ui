import React from 'react';
import './TabsContainer.scss';

export default function(props) {
    return(
        <>
            <div className="TabsContainer">
                {props.children}
            </div>
        </>
    );
}
