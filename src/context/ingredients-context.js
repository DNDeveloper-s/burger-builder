import React from "react";

const ingredientsContext = React.createContext({
    addIngredient: null,
    removeIngredient: null,
    disabledInfo: null
});

export default ingredientsContext;