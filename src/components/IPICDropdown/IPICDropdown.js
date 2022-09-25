import React from 'react';
import './IPICDropdown.css';
import Form from 'react-bootstrap/Form';

const IPICDropdown = (props) => {

    const focusInput = () => {
        let input = document.getElementById(props.header);
        input.focus();
    };

    let checkList = props.list.map(item => (
        <div key={item} className={"DropdownOptions"} style={props.filter ? {display: (item.toString().toLowerCase().includes(props.filter) ? "block" : "none")} : {display: "block"}}>
            <Form.Check
                type={"checkbox"}
                id={item}
                label={item}
                checked={props.filterList ? props.filterList.includes(item) : false}
                onChange={(event) => props.handleCheck(event, item)}
            >
            </Form.Check>
        </div>
    ));

    return (
        <div className="IPICDropdown">
            <div className="IPICDropdownHeader">
                <h5>{props.header}</h5>
            </div>
            <input
                type="text"
                placeholder={props.placeholder}
                className="IPICDropdownInput"
                value={props.filter}
                id={props.header}
                onChange={props.setFilter}
                autoComplete={"off"}
            />
            <div className="IPICDropdownContent" onClick={focusInput}>
                {checkList}
            </div>
        </div>
    )
};

export default IPICDropdown;