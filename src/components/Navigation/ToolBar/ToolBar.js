import React from "react";
import PropTypes from 'prop-types';

// Component Imports
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

// Stylesheets Imports
import classes from './ToolBar.module.css';

const ToolBar = props => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.ToggleButton}>
                <DrawerToggle clicked={props.openSideDrawer}/>
            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
};

ToolBar.propTypes = {
    openSideDrawer: PropTypes.func
};

export default ToolBar;