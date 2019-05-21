import React from 'react';
import './Modal.scss';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
        console.log(this.modalContainer.clientHeight);
        this.modalBg.style.height = `${this.modalBody.clientHeight}px`;

        // this.modalBg.clientHeight = this.modalContainer.clientHeight;
        document.addEventListener("keydown", this.onEscPress, false);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
        document.removeEventListener("keydown", this.onEscPress, false);
    }

    render() {
        return ReactDOM.createPortal(
            <div className={`Modal ${this.props.positioning}`}
                 ref={elem => this.modalBody = elem}
                 id="Modal">

                <div className="Modal__bg"
                     ref={elem => this.modalBg = elem}
                     onClick={this.onClick}></div>
                <div ref={elem => this.modalContainer = elem}
                     className={`Modal__container ${this.props.containerClass}`}>
                    {this.props.children}
                </div>
            </div>,
            this.el
        );
    }

    onClick = () => {
        this.props.unmount();
    };

    onEscPress = ()=> {
        this.props.unmount();
    }
}
