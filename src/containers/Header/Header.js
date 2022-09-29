import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Header.css';
import ipicLogoTransparent from '../../assets/IPIC Logo Transparent.png';
import ipicLogoTransparentGif from '../../assets/IPIC Logo Transparent Gif.gif';
import darkMode from '../../assets/darkMode.png';
import connect from "react-redux/es/components/connect";
import * as actions from "../../store/actions";

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
                <div className={"topnav"+(this.props.darkMode ? " HeaderDarkMode" : "")}>
                    <div className="topLeftNav">
                        <img src={this.state.logo} alt={"loading..."} className="navLogo" onClick={this.gififyLogo}/>
                        <p className="topLeftNavName">IP Information Center</p>
                    </div>
                    <div className="topRightNav" onClick={this.props.onToggleDarkMode}>
                        <img alt="...Loading" src={darkMode} width={20} className={"darkModeImage"} title={"Toggle Dark Mode"}/>
                        <p>Switch Mode</p>
                        {/*<p className="topRightNavName">UserName/User ID</p>*/}
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkModeReducer.darkMode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleDarkMode: () => dispatch(actions.toggleDarkMode())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);