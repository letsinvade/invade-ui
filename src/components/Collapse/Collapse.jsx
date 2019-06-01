import React from "react";
import PropTypes from "prop-types";
import ResizeDetector from "react-resize-detector";

import "./Collapse.scss";

const propTypes = {
    collapsed: PropTypes.bool.isRequired
};

const defaultProps = {
    collapsed: false
};

class Collapse extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            height: "fit-content"
        };
    }
    
    render () {
        const {
            collapsed,
            children,
            className,
            style,
            ...props
        } = this.props;

        return (
            <div
                className={`Collapse Collapse_${
                    collapsed ? "_collapsed": "_expanded"
                }${
                    className ? " " + className : ""
                }`}
                style={{ height: (collapsed ? "0" : this.state.height), ...style }}
                {...props}
            >
                <div className="Collapse__content" ref={(el) => this.content = el }>
                    {children}
                    <ResizeDetector handleHeight onResize={this.calculateHeight}/>
                </div>
            </div>
        );
    }

    calculateHeight = () => {
        const height = this.content.lastChild.getBoundingClientRect().bottom -  
            this.content.firstChild.getBoundingClientRect().top;

        this.setState({ height: height });
    }
};

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;