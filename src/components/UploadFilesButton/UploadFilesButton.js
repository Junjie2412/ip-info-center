import React from 'react';
import './UploadFilesButton.css';
import {FiUpload} from "react-icons/fi";

const IPICButton = (props) => {

    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile ? props.handleFile(fileUploaded) : console.log("No handle file feature");
    };

    return (
        <div className="UploadFilesButton">
            <button onClick={handleClick}><FiUpload className="uploadIcon"/> {props.label}</button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
            <div className={"uploadedFileName"}>{props.fileName}</div>
        </div>
    )
};

export default IPICButton;