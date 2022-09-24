import React from 'react';
import './IPICButton.css';

const IPICButton = (props) => {

    return (
        <button onClick={props.onClick}
                disabled={props.disabled}
                className={(props.type==="blue" ? "IPICButtonBlue " : "IPICButtonWhite ") + (props.className ? ["IPICButton", props.className].join(' '): "IPICButton")}
        >
            {props.label}
        </button>
    )
};

export default IPICButton;