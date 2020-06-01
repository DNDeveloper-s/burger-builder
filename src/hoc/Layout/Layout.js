import React, {Component} from "react";

// Component Imports
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// Stylesheet Imports
import classes from "./Layout.module.css";

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerOpenedHandler = () => {
        this.setState({showSideDrawer: true})
    };

    render() {
        return (
            <React.Fragment>
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <ToolBar openSideDrawer={this.sideDrawerOpenedHandler}/>
                <main className={classes.main}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;