import React, {Fragment} from "react";
import PropTypes from 'prop-types';

// Component Imports
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";

// Stylesheet Imports
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
    const attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show) {
        attachedClasses[1] = classes.Open;
    }

    return (
        <Fragment>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Fragment>
    )
};

sideDrawer.propTypes = {
    closed: PropTypes.func,
    show: PropTypes.bool
};

export default sideDrawer;