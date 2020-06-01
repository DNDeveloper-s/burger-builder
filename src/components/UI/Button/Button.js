import React from "react";
import PropTypes from 'prop-types';

// StyleSheet Imports
import classes from './Button.module.css';

const Button = props => {

    return (
        <button
            className={`
                ${classes.Button} 
                ${classes[props.color] || ' '}
            `}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    )
};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string
};

export default Button;