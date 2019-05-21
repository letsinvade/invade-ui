import React from 'react';
import './Dropdown.scss';

import DropdownToggler from './DropdownToggler/DropdownToggler.jsx';
import DropdownMenu from './DropdownToggler/DropdownToggler.jsx';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: this.props.itemList,
            preSelected: this.props.preSelected,
            togglerText: this.props.togglerText,
            label: this.props.label,
            onSelected: this.props.onSelected,

            selected: this.props.preSelected ? this.props.preSelected : null
        }
    }

    render() {


        return(
            <>
                <DropdownToggler>
                    <p className="DropdownToggler__name">
                        {this.state.selected}
                    </p>
                </DropdownToggler>

                <DropdownMenu>

                </DropdownMenu>
            </>
        )
    }
}
