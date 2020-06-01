import React, {useContext} from "react";
import PropTypes from "prop-types";

// Component Imports
import Button from "../../../UI/Button/Button";

// Context Imports
import IngredientsContext from '../../../../context/ingredients-context';

// StyleSheets Imports
import classes from './BuildControl.module.css';

const buildControl = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ingredientsContext = useContext(IngredientsContext);

    return (
        <div className={classes.BuildControl}>
            <label htmlFor="">{props.label}</label>
            <div className={classes.Buttons}>
                <Button value="Less" clicked={() => ingredientsContext.removeIngredient(props.label)} disabled={ingredientsContext.disabledInfo[props.label]} color={'Red'}/>
                <Button value="More" clicked={() => ingredientsContext.addIngredient(props.label)} color={'Green'}/>
            </div>
        </div>
    )
};

buildControl.propTypes = {
    label: PropTypes.string.isRequired
};

export default buildControl;