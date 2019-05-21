import React from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import testImg from "../../assets/test-Image.JPG";

export default class ModalExample extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showTopModal: false
        }
    }

    render() {
        let modalBody = <Modal unmount={this.onModalClose}
                               containerClass="-w650">
            <h1>This is a Modal</h1>
            <p>Try to see if this one is a good content</p>
        </Modal>;

        let topModalBody = <Modal unmount={this.onTopModalClose}
                               containerClass="-w650"
                               positioning={'-top-positioning'}>
            <h1>This is a Top Modal</h1>
            <p>Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content</p>
            <img src={testImg} alt=""/>
            <ul>
                <li>
                    Try this trick
                </li>
                <li>
                    And spin it
                </li>
                <li>
                    Yeah
                </li>
                <li>
                    Try this trick
                </li>
                <li>
                    And spin it
                </li>
                <li>
                    Yeah
                </li>
                <li>
                    Try this trick
                </li>
                <li>
                    And spin it
                </li>
                <li>
                    Yeah
                </li>
            </ul>
            <p>Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content Try to see if this one is a good content</p>
            <ul>
                <li>
                    Try this trick
                </li>
                <li>
                    And spin it
                </li>
                <li>
                    Yeah
                </li>
                <li>
                    <img src={testImg} alt=""/>
                </li>
                <li>
                    And spin it
                </li>
                <li>
                    Yeah
                </li>
            </ul>
            <img src={testImg} alt=""/>
        </Modal>;


        return (
            <>
                <Button onClick={this.onButtonClick}
                        className='-mr5'>
                    Open Default Modal
                </Button>

                <Button onClick={this.onTopModalButtonClick}>
                    Open Modal Top
                </Button>

                {this.state.showModal ? modalBody : ''}
                {this.state.showTopModal ? topModalBody : ''}
            </>
        )
    }

    onButtonClick = () => {
        this.setState({showTopModal: false});
        this.setState({showModal: true});
    };

    onModalClose = () => {
        this.setState({showModal: false});
    };

    onTopModalButtonClick = () => {
        this.setState({showModal: false});
        this.setState({showTopModal: true});
    };

    onTopModalClose = () => {
        this.setState({showTopModal: false});
    }
}
