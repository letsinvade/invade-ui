import React from 'react';

class BaseTextInput extends React.Component {
    render() {
        const {
            placeholder,
            defaultValue
        } = this.props;

        return (
            <input type="text" placeholder={placeholder} defaultValue={defaultValue}/>
        );
    }

}

export default BaseTextInput;
