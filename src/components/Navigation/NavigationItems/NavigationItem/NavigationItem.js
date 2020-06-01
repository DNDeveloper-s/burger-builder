import React from "react";
import PropTypes from 'prop-types';

// Stylesheets Imports
import classes from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <a className={props.active ? classes.active : ''} href={props.link}>{props.children}</a>
    </li>
);

navigationItem.propTypes = {
    link: PropTypes.string
};

export default navigationItem;