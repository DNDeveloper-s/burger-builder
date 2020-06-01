import React from "react";
import PropTypes from 'prop-types';

// Stylesheets Imports
import classes from "./DrawerToggle.module.css";

// Images Imports
import MenuButton from "../../../../assets/images/menu.svg";

const drawerToggle = props => (
    <div className={classes.ToggleButton} onClick={props.clicked}>
        <img src={MenuButton} alt=""/>
    </div>
);

drawerToggle.propTypes = {
    clicked: PropTypes.func
};

export default drawerToggle;