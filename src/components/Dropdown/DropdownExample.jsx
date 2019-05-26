import React from 'react';
import Dropdown from "./Dropdown";

export default class DropdownExample extends React.Component {
    constructor() {
        super();
        this.state = {
            scinceList: [
                'Math',
                'Physics',
                'Chemistry',
                'Philosophy',
                'Computer Science'
            ],
            actionList: [
                'Do this',
                'Do that',
                'Logout'
            ]
        }
    }

    render() {
        return(
            <div className='flex-container'>
                <Dropdown itemList={this.state.scinceList}
                          className="-mr5"
                          togglerText="Select dropdown"
                          isSelect={true}
                          onSelected={this.onDropdownSelect}>
                </Dropdown>

                <Dropdown itemList={this.state.actionList}
                          className="-mr5"
                          togglerText="Profile menu Dropdown"
                          onSelected={this.onDropdownSelect}>
                </Dropdown>
            </div>
        )
    }

    onDropdownSelect = (data) => {
        console.log(`The ${data} have been chosen over here`);
    }
}
