import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import IPICTab from '../../components/IPICTab/IPICTab'
import './NavBar.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {NavLink} from "react-router-dom";

class NavBar extends Component {

    state = {
        activeTab: "",
    };

    setTab = (tab) => {
        this.props.onSetCurrentTab(tab);
        this.setState({activeTab: tab});
    };

    render () {

        return (
            <Aux>
                <div className={"NavBar"+(this.props.darkMode ? " HeaderDarkMode" : "")}>
                    <IPICTab darkMode={this.props.darkMode} label="About" selected={this.props.currentTab==="About"} onClick={()=> this.setTab("About")} link={"/about"}/>
                    <IPICTab darkMode={this.props.darkMode} label="Search Criteria" selected={this.props.currentTab==="Search Criteria"} onClick={()=> this.setTab("Search Criteria")} link={"/home"}/>
                    <IPICTab darkMode={this.props.darkMode} hidden={!this.props.showGeolocationTab} label="Geolocation Data" selected={this.props.currentTab==="Geolocation Data"} onClick={()=> this.setTab("Geolocation Data")} link={"/geolocation"}/>
                    <IPICTab darkMode={this.props.darkMode} hidden={!this.props.showTradeDataTab} label="Trade Data" selected={this.props.currentTab==="Trade Data"} onClick={()=>this.setTab("Trade Data")} link={"/tradedata"}/>
                    <NavLink to={"/"} style={{textDecoration: "none", color: "black"}}>
                        <div className="NavBarRight">
                            <p className="NavBarRightWords">Log Out</p>
                        </div>
                    </NavLink>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentTab: state.tabReducer.currentTab,
        showGeolocationTab: state.tabReducer.showGeolocationTab,
        showTradeDataTab: state.tabReducer.showTradeDataTab,
        darkMode: state.darkModeReducer.darkMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);