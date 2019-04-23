import React from 'react';
import './Button.scss';


// Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.

const ActionButton = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button> 

    );
};

export default ActionButton;