import React from "react";
import PropTypes from 'prop-types';

// Classes Imports
import classes from './BurgerIngredient.module.css';

// Images Imports
import Salad from "../../../assets/images/Salad.svg";
import BottomBun from "../../../assets/images/Bottom_Bun.svg";
import TopBun from "../../../assets/images/Top_Bun.svg";
import Cheese from "../../../assets/images/Cheese.svg";
import Patty from "../../../assets/images/Patty.svg";

const images = {
    Salad: Salad,
    BottomBun: BottomBun,
    TopBun: TopBun,
    Cheese: Cheese,
    Patty: Patty,
};

const burgerIngredient = props => {

    const styles = {
        zIndex: props.index
    };

    return (
        <div style={styles} className={[classes.ingredient, classes[props.type]].join(' ')}><img src={images[props.type]} alt=""/></div>
    )
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;