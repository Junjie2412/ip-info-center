import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Auth.css';
import Form from 'react-bootstrap/Form';
import IPICButton from "../../components/IPICButton/IPICButton";
import {NavLink} from "react-router-dom";
import connect from "react-redux/es/components/connect";

class Auth extends Component {

    render () {

        return (
            <Aux>
                <div className={"Auth"+(this.props.darkMode ? " DarkMode": "")}>
                    <div className={"loginBox"+(this.props.darkMode ? " DarkMode": "")}>
                        <div>
                            <div style={{textAlign: "center"}}>
                                <b>Log in using your FINRA ID</b>
                            </div>
                            <div>
                                <Form.Label>User Name *</Form.Label>
                                <Form.Control type="text" placeholder="User Name" />
                            </div>
                            <div>
                                <Form.Label>Password *</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <NavLink to={"/about"} style={{textDecoration: "none"}}>
                                <IPICButton label={"Log In"} medium type={"blue"}/>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={"/about"} style={{textDecoration: "none"}}>
                                <IPICButton label={"SSO Login"} medium/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkModeReducer.darkMode
    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Auth);