import React from 'react';
import PropTypes from 'prop-types';
import TabsButton from './TabsButton/TabsButton.jsx';
import './Tabs.scss';

const propTypes = {
    tabList: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentTab: PropTypes.string
};

const defaultProps = {
    currentTab: 0
};

class Tabs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: props.currentTab
        };
    }

    render() {
        const {
            tabList,

            currentTab,
            ...props
        } = this.props;

        let buttonList = tabList.map((tab, i) => {
            return (
                <TabsButton
                    tabData={tab}
                    key={i}
                    currentTab={this.state.currentTab}
                    onClick={this.setTab}/>
            );
        });

        return (
            <div className="Tabs" {...props}>
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

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
