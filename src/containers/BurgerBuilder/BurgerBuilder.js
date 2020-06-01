import React, {Component, Fragment} from "react";

// Components Imports
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

// Context Imports
import IngredientsContext from '../../context/ingredients-context';

const INGREDIENTS_PRICE = {
    Salad: 0.5,
    Cheese: 0.7,
    Patty: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Salad: 1,
            Cheese: 1,
            Patty: 1
        },
        totalPrice: 2.5,
        purchasable: true,
        purchasing: false,
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: ingredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredients);
    };

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        if(ingredients[type] === 0) return null;
        ingredients[type] = ingredients[type] - 1;
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: ingredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        alert('You continue');
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <IngredientsContext.Provider value={{
                    addIngredient: this.addIngredientHandler,
                    removeIngredient: this.removeIngredientHandler,
                    disabledInfo: disabledInfo
                }}>
                    <BuildControls
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </IngredientsContext.Provider>
            </Fragment>
        )
    }
}

export default BurgerBuilder;