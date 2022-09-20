import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Header.css';
import ipicLogoTransparent from '../../assets/IPIC Logo Transparent.png';
import ipicLogoTransparentGif from '../../assets/IPIC Logo Transparent Gif.gif';

class Header extends Component {

    state = {
        logo: ipicLogoTransparentGif,
        isGif: true
    };

    gififyLogo =() => {
        if (this.state.isGif) {
            this.setState({
                logo: ipicLogoTransparent,
                isGif: false
                })
        } else {
            this.setState({
                logo: ipicLogoTransparentGif,
                isGif: true
            })
        }
    };

    render () {
        return (
            <Aux>
                <div className="topnav">
                    <div className="topLeftNav">
                        <img src={this.state.logo} alt={"loading..."} className="navLogo" onClick={this.gififyLogo}/>
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