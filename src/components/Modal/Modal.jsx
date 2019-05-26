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
        setTimeout(() => {
            modalRoot.appendChild(this.el);
            const modalBody = this.modalBody.clientHeight;
            const modalContainer = this.modalContainer.clientHeight;

            if (modalContainer > modalBody || modalBody - modalContainer < 300) {
                this.modalBg.style.height = `${this.modalContainer.clientHeight + 300}px`;
            }
        }, 20)
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
