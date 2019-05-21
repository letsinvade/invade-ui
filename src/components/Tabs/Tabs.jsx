import React from 'react';
import TabsButton from './TabsButton/TabsButton.jsx';
import './Tabs.scss';

export default class Tabs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabs: this.props.tabList,
            currentTab: this.props.currentTab
        };
    }

    render() {
        let buttonList = this.props.tabList.map((tab, i) => {
            return (
                <TabsButton
                    tabData={tab}
                    key={i}
                    currentTab={this.state.currentTab}
                    onClick={this.setTab}/>
            );
        });

        return (
            <div className="Tabs">
                <div className="Tabs__button-row">
                    {buttonList}
                </div>
                {this.props.children.filter(child => child.props.selector === this.state.currentTab)}
            </div>
        );
    }

    setTab = (selector) => {
        this.setState({currentTab: selector});
    }
}
