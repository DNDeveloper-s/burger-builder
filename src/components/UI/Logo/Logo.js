import React from "react";

// Images Imports
import LogoImage from '../../../assets/images/Logo.png'

// Stylesheet Imports
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={LogoImage} alt=""/>
    </div>
);

export default logo;