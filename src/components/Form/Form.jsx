import React from 'react';
import './Form.scss';

class Form extends React.Component {
    render() {
        return (
            <div className="Form">
                {this.props.children}
            </div>
        )
    }
}

export default Form;
