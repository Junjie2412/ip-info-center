import React from 'react';
import './IPICDropdown.css';
import Form from 'react-bootstrap/Form';

const IPICDropdown = (props) => {

    let checkList = props.list.map(item => (
        <div key={item.name}>
            <Form.Check
                type={"checkbox"}
                id={item.name}
                label={item.name}
                checked={props.checked}
            >
            </Form.Check>
        </div>
    ));

    return (
        <div className="IPICDropdown">
            <div className="IPICDropdownHeader">
                <h5>{props.header}</h5>
            </div>
            <input type="text" placeholder={props.placeholder} className="IPICDropdownInput" value={props.value} onClick={props.onClickSearch}/>
            <div className="IPICDropdownContent" style={props.show ? {display: "block"}:{display: "none"}}>
                {checkList}
            </div>
        </div>
    )
};

export default IPICDropdown;