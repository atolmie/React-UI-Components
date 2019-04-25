import React from 'react';
import './Display.scss';

// - Create a `<CalculatorDisplay />` component that will be used as the `calculator display`

const CalculatorDisplay = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>

    );
};

export default CalculatorDisplay;