import React from 'react';
import Form from "./Form";
import BaseTextInput from "./Input/BaseTextInput";

class FormExample extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: {
                name: '',
                lastName: '',
                phone: '',
                email: ''
            },
            formValid: false
        }
    }

    render() {
        const userData = this.state.userData;

        return (
            <Form>
                <div className="Form__row">
                    <BaseTextInput name="name"
                                   placeholder="Enter your name"
                                   defaultValue={userData.name}
                                   onChange={this.setUserDataField}/>
                </div>
                <div className="Form__row">
                    <BaseTextInput name="name"
                                   placeholder="Enter your name"
                                   defaultValue={userData.lastName}
                                   onChange={this.setUserDataField}/>
                </div>
                <div className="Form__row">
                    <BaseTextInput name="name"
                                   placeholder="Enter your name"
                                   defaultValue={userData.phone}
                                   onChange={this.setUserDataField}/>
                </div>
                <div className="Form__row">
                    <BaseTextInput name="name"
                                   placeholder="Enter your name"
                                   defaultValue={userData.email}
                                   onChange={this.setUserDataField}/>
                </div>
            </Form>
        )
    }

    setUserDataField = (name, value) => {
        const newUserData = this.state.userData;
        newUserData[name] = value;
        this.setState({userData: newUserData});
    };

    checkIfFormValid = () => {
        return Object.values(this.state.userData).forEach(value => value !== 'invalid');
    }
}

export default FormExample;
