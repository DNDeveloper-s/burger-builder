import React from "react";

// Component Imports
import NavigationItem from "./NavigationItem/NavigationItem";

// Stylesheets Imports
import classes from './NavigationItems.module.css';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
        <NavigationItem link={'/checkout'}>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;