import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

const propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
    preSelected: PropTypes.string,
    togglerText: PropTypes.string,
    selected: PropTypes.string,
    isSelect: PropTypes.bool
};

const defaultProps = {
    preSelected: '',
    togglerText: 'Pick an option',
    selected: '',
    isSelect: false
};

class Dropdown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: props.isSelect,
            selected: props.preSelected,
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
        const {
            itemList,
            togglerText,
            className
        } = this.props;


        let menuItems =
            itemList.map((item, i) => {
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
            <div className={`Dropdown ${className}`} ref={elem => this.node = elem}>
                <div className={`DropdownToggler ${this.state.isOpen ? '-active' : ''}`}
                        onClick={this.toggleDropdown}>
                    <span className="DropdownToggler__name">
                        { this.state.selected ? this.state.selected : togglerText }
                    </span>
                </div>

                <div className={`DropdownMenu ${this.state.isOpen ? '-visible' : ''}`}>
                    <div className="DropdownMenu__container">
                        <ul className="DropdownMenu__menu">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    toggleDropdown = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    selectItem = e => {
        if (this.state.isSelect) {
            this.setState({selected: e.currentTarget.getAttribute('name')});
        }
        this.props.onSelected(e.currentTarget.getAttribute('name'));
        this.toggleDropdown();
    };

    handleClick = e => {
        if (!this.node.contains(e.target)) {
            if (this.state.isOpen) {
                this.toggleDropdown();
            }
        }
    }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
