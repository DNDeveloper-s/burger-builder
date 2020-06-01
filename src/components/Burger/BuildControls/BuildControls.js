import React from "react";

// StyleSheet Imports
import classes from './BuildControls.module.css';

// Components Imports
import BuildControl from "./BuildControl/BuildControl";
import Button from "../../UI/Button/Button";

const controls = [
    'Salad',
    'Cheese',
    'Patty'
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p className={classes.price}>Current Price: {props.totalPrice.toFixed(2)} $</p>
        {controls.map(ctrl => <BuildControl key={ctrl} label={ctrl}/>)}
        <div className={classes.OrderNow}>
            <Button value="ORDER NOW" disabled={!props.purchasable} clicked={props.ordered} color={'Blue'}/>
        </div>
        {/*<button onClick={props.ordered} className={classes.OrderNow} disabled={!props.purchasable}>ORDER NOW</button>*/}
    </div>
);

export default buildControls;