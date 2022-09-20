import React from 'react';
import './IPICButton.css';

const IPICButton = (props) => {

    return (
        <button className={(props.type==="blue" ? "IPICButtonBlue " : "IPICButtonWhite ") + (props.className ? ["IPICButton", props.className].join(' '): "IPICButton")}>
            {props.label}
        </button>
    )
};

export default IPICButton;