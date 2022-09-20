import React from 'react';
import './UploadFilesButton.css';
import {FiUpload} from "react-icons/fi";

const IPICButton = (props) => {

    return (
        <div className="UploadFilesButton">
            <button onChange={props.onClick}><FiUpload className="uploadIcon"/> {props.label}</button>
        </div>
    )
};

export default IPICButton;