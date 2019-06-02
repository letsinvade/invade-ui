import React from 'react';
import './TabsButton.scss';

const TabsButton = ({
    tabData,
    currentTab,
    onClick,
             }) => {
    return(
        <div className={`TabsButton ${tabData.selector === currentTab ? '-active' : ''}`}
             onClick={() => onClick(tabData.selector)}>
            <div className="TabsButton__inner">
                <p className="TabsButton__name">
                    {tabData.name}
                </p>
            </div>
        </div>
    )

};

export default TabsButton;
