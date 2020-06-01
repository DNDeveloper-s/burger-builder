import React from "react";

import classes from './Burger.module.css';

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(cur => {
        let ingredientArr = [];
        for(let i = 0; i < props.ingredients[cur]; i++) {
            ingredientArr.push(<BurgerIngredient index={-i+1} key={`ingredient-${(i+1) * (Math.floor(Math.random() * 21738))}`} type={cur}/>)
        }
        return ingredientArr;
    }).reduce((acc, curValue) => {
        return acc.concat(curValue);
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <div className={classes.noIngredients}>Please start adding ingredients</div>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="TopBun"/>
            {transformedIngredients}
            <BurgerIngredient type="BottomBun"/>
        </div>
    );
};

export default burger;