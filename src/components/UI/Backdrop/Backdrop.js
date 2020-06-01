import React from "react";
import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

const backDrop = props => (
    <div onClick={props.clicked} className={`${classes.BackDrop} ${props.show ? classes.show : ''}`}/>
);

backDrop.propTypes = {
    clicked: PropTypes.func,
    show: PropTypes.bool
};

export default backDrop;