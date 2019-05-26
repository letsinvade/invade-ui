import React from 'react';
import './Dropdown.scss';
import DropdownToggler from "./DropdownToggler/DropdownToggler";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

export default class Dropdown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemList: this.props.itemList,
            preSelected: this.props.preSelected,
            togglerText: this.props.togglerText,
            selected: this.props.preSelected ? this.props.preSelected : null,
            isSelect: this.props.isSelect,
            isOpen: false
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    render() {
        let menuItems =
            this.state.itemList.map((item, i) => {
                return (
                    <li key={i}
                        name={item}
                        className={this.state.selected === item ? '-selected' : ''}
                        onClick={this.selectItem}>
                        <a>{item}</a>
                    </li>
                )
            });

        return(
            <div className={`Dropdown ${this.props.className}`} ref={elem => this.node = elem}>
                <DropdownToggler className={`DropdownToggler ${this.state.isOpen ? '-active' : ''}`}
                        onClick={this.toggleDropdown}>
                    <span className="DropdownToggler__name">
                        { this.state.selected ? this.state.selected : this.state.togglerText }
                    </span>
                </DropdownToggler>

                <DropdownMenu className={`DropdownMenu ${this.state.isOpen ? '-visible' : ''}`}>
                    <div className="DropdownMenu__container">
                        <ul className="DropdownMenu__menu">
                            {menuItems}
                        </ul>
                    </div>
                </DropdownMenu>
            </div>
        )
    }

    toggleDropdown = () => {
        this.setState({isOpen: !this.state.isOpen});
        if (this.state.isOpen) {

        }
    };

    selectItem = e => {
        if (this.state.isSelect) {
            this.setState({selected: e.currentTarget.getAttribute('name')});
        }
        this.props.onSelected(e.currentTarget.getAttribute('name'));
        this.toggleDropdown();
    };

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            if (this.state.isOpen) {
                this.toggleDropdown();
            }
        }
    }
}
