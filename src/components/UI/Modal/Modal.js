import React, {Component, Fragment} from "react";

// Component Imports
import BackDrop from "../Backdrop/Backdrop";

// Stylesheet imports
import classes from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Fragment>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={`${classes.Modal} ${this.props.show ? classes.show : ''}`}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;