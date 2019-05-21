import React from 'react';
import Dropdown from "./Dropdown";
import DropdownToggler from "./DropdownToggler/DropdownToggler";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

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
            ]
        }
    }

    render() {
        return(
            <>
                <Dropdown items={this.state.scinceList}
                          togglerText="Cool Subjects"
                          preSelected={this.state.scinceList[0]}
                          label="Pick a subject you like:"
                          onSelected={this.onDropdownSelect}>
                </Dropdown>
            </>
        )
    }

    onDropdownSelect = (data) => {
        console.log(`The ${data} have been chosen over here`);
    }
}
