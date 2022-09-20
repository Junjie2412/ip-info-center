import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Header.css';
import ipicLogoTransparent from '../../assets/IPIC Gif Logo Transparent.gif';

class Header extends Component {


    render () {
        return (
            <Aux>
                <div className="topnav">
                    <div className="topLeftNav">
                        <img src={ipicLogoTransparent} alt={"loading..."} className="navLogo"/>
                        <p className="topLeftNavName">IP Information Center</p>
                    </div>
                    <div className="topRightNav">
                        <p className="topRightNavName">UserName/User ID</p>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Header;