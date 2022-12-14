import React from 'react';
import './IPICTab.css';
import {NavLink} from 'react-router-dom';

const IPICTab = (props) => {

    return (
        <NavLink to={props.link} style={{textDecoration: "none", display: (props.hidden ? "none" : "")}}>
            <div className={"IPICTab"+(props.selected ? " IPICTabActive" : "")+(props.darkMode ? " DarkMode" : "")} onClick={props.onClick}>
                    <p className="IPICTabWords">{props.label}</p>
            </div>
        </NavLink>
    );
}

export default IPICTab;