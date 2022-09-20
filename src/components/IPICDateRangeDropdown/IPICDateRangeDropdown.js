import React from 'react';
import './IPICDateRangeDropdown.css';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const IPICDateRangeDropdown = (props) => {

    const [state, setState] = useState([
        {
            startDate: props.startDate,
            endDate: props.endDate,
            key: 'selection'
        }
    ]);

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const changeDateRange = (item) => {
        setState([item.selection]);
        console.log([item.selection]);
        props.updateDate(item.selection);
    };

    return (
        <div className="IPICDateRangeDropdown">
            <div className="IPICDropdownHeader">
                <h5>{props.header}</h5>
            </div>
            <input onClick={handleShow} type="text" placeholder={props.placeholder} className="IPICDateRangeDropdownInput" readOnly value={props.value}/>
            <Modal show={show} onHide={handleClose} centered dialogClassName={"my-modal"}>
                <Modal.Header closeButton>
                    <Modal.Title>Date Range</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <DateRangePicker
                    onChange={item => changeDateRange(item)}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default IPICDateRangeDropdown;