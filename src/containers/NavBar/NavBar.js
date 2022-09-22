import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import IPICTab from '../../components/IPICTab/IPICTab'
import './NavBar.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class NavBar extends Component {

    state = {
        activeTab: ""
    };

    setTab = (tab) => {
        this.props.onSetCurrentTab(tab);
        this.setState({activeTab: tab});
    };

    render () {
        return (
            <Aux>
                <div className="NavBar">
                    <IPICTab label="Search Criteria" selected={this.props.currentTab==="Search Criteria"} onClick={()=> this.setTab("Search Criteria")} link={"/home"}/>
                    <IPICTab hidden={!this.props.showGeolocationTab} label="Geolocation Data" selected={this.props.currentTab==="Geolocation Data"} onClick={()=> this.setTab("Geolocation Data")} link={"/geolocation"}/>
                    <IPICTab hidden={!this.props.showTradeDataTab} label="Trade Data" selected={this.props.currentTab==="Trade Data"} onClick={()=>this.setTab("Trade Data")} link={"/tradedata"}/>
                    <div className="NavBarRight">
                        <p className="NavBarRightWords">About IPIC</p>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentTab: state.tabReducer.currentTab,
        showGeolocationTab: state.tabReducer.showGeolocationTab,
        showTradeDataTab: state.tabReducer.showTradeDataTab
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);