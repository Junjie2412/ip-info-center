import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import IPICTab from '../../components/IPICTab/IPICTab'
import './NavBar.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class NavBar extends Component {

    state = {
        activeTab: "",
        show: false
    };

    setTab = (tab) => {
        this.props.onSetCurrentTab(tab);
        this.setState({activeTab: tab});
    };

    render () {

        const renderTooltip = (
            <Tooltip id="button-tooltip">
                IP Information Center is a tool that can bulk upload IP address and related datasets to quickly identify patterns of potential suspicious activity and higher risk accounts.
            </Tooltip>
        );

        return (
            <Aux>
                <div className="NavBar">
                    <IPICTab label="Search Criteria" selected={this.props.currentTab==="Search Criteria"} onClick={()=> this.setTab("Search Criteria")} link={"/home"}/>
                    <IPICTab hidden={!this.props.showGeolocationTab} label="Geolocation Data" selected={this.props.currentTab==="Geolocation Data"} onClick={()=> this.setTab("Geolocation Data")} link={"/geolocation"}/>
                    <IPICTab hidden={!this.props.showTradeDataTab} label="Trade Data" selected={this.props.currentTab==="Trade Data"} onClick={()=>this.setTab("Trade Data")} link={"/tradedata"}/>
                    <div className="NavBarRight">
                        <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                            placement={"bottom"}
                        >
                            <p className="NavBarRightWords" onClick={() => this.setState({show: !this.setState.show})}>About IPIC</p>
                        </OverlayTrigger>
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