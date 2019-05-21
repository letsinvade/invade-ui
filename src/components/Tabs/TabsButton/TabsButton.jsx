import React from 'react';
import './TabsButton.scss';

class TabsButton extends React.Component {
    render() {
        const tab = this.props.tabData;

        return(
            <div className={`TabsButton ${tab.selector === this.props.currentTab ? '-active' : ''}`}
                 onClick={this.onClick}>
                <div className="TabsButton__inner">
                    <p className="TabsButton__name">
                        {tab.name}
                    </p>
                </div>
            </div>
        )
    }

    onClick = () => {
        this.props.onClick(this.props.tabData.selector);
    }

};

export default TabsButton;


