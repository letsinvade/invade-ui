import React from "react";
import PropTypes from "prop-types";

import Collapse from "./../Collapse";

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

class Accordion extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentItemIndex: 0
        };
    }

    render () {
        const {
            items,
            className,
            ...props
        } = this.props;

        return (
            <div className={`Accordion${className ? " " + className: ""}`} {...props}>
            {
                items.map((item, index) => {
                    return (
                        <div className="Accordion__item" key={index}>
                            <div
                                className="Accordion__header"
                                onClick={() => this.setItemIndex(index)}
                            >
                                {item.header}
                            </div>
                            <Collapse 
                                className="Accordion__content"
                                collapsed={ index !== this.state.currentItemIndex }
                            >
                                {item.content}
                            </Collapse>
                        </div>
                    );
                })
            }
            </div>
        );
    }

    setItemIndex = (itemIndex) => {
        if (itemIndex === this.state.currentItemIndex) {
            this.setState({ currentItemIndex: -1 });
        } else {
            this.setState({ currentItemIndex: itemIndex });
        }
    }
};

Accordion.propTypes = propTypes;

export default Accordion;