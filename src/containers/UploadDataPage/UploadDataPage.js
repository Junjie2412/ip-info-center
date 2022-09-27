import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './UploadDataPage.css';
import IPICButton from '../../components/IPICButton/IPICButton';
import * as actions from "../../store/actions";
import {connect} from 'react-redux';
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";
import {NavLink} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class UploadDataPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Search Criteria");
    }

    submit = () => {
        if (this.props.ipicStatistic==="GEO") {
            this.props.onShowGeolocationTab(true);
        }
        else if (this.props.ipicStatistic==="TRADE") {
            this.props.onShowTradeDataTab(true)
        } else {
            this.props.onShowGeolocationTab(true);
        }
    };

    handleFile = (file) => {
        console.log(file);
        this.props.onSetUploadFile(file.name);
    };

    render () {

        const renderGeoTooltip = (
            <Tooltip id="button-geotooltip">
                This view will display the IP address locations on a map and provide a risk score.
            </Tooltip>
        );

        const renderTradeTooltip = (
            <Tooltip id="button-tradetooltip">
                This summary dashboard view will be used for trade data with IP address and related information.
            </Tooltip>
        );

        return (
            <Aux>
                <div className={"UploadDataPage"+(this.props.darkMode ? " DarkMode": "")}>
                    <div className="UploadNavSection">
                        <div className="UploadNavWords">
                            <p>Upload Data</p>
                        </div>
                        <UploadFilesButton handleFile={this.handleFile} label={"Upload Files"} fileName={this.props.uploadedFile}/>
                    </div>
                    <div className="UploadNavSection">
                        <div className="UploadNavWords">
                            <p>IPIC Statistics</p>
                        </div>
                        <div className="UploadFilesRadios">
                            <input type="radio" id="geolocation" name="statistics" value="GEO" onChange={() => this.props.onSetIpicStatistic("GEO")}/>
                            <OverlayTrigger
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderGeoTooltip}
                                placement={"bottom"}
                            >
                            <label htmlFor="geolocation" >IP Geolocation Data</label>
                            </OverlayTrigger>
                            <input type="radio" id="tradedata" name="statistics" value="TRADE" onChange={() => this.props.onSetIpicStatistic("TRADE")}/>
                            <OverlayTrigger
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTradeTooltip}
                                placement={"bottom"}
                            >
                                <label htmlFor="tradedata">IP Trade Data</label>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="UploadNavSection">
                        <div className="UploadNavButtonGroup">
                            <div className="UploadNavButton">
                                <NavLink to={this.props.ipicStatistic==="TRADE" ? "/tradedata" : "/geolocation"}>
                                    <IPICButton onClick={this.submit} label={"SUBMIT"} type={"blue"}/>
                                </NavLink>
                            </div>
                            <div className="UploadNavButton">
                                <IPICButton label={"CANCEL"} onClick={() => this.props.onSetUploadFile("")} type={"white"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        uploadedFile: state.uploadFilesReducer.uploadedFile,
        ipicStatistic: state.uploadFilesReducer.ipicStatistic,
        darkMode: state.darkModeReducer.darkMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onShowGeolocationTab: (show) => dispatch(actions.showGeolocationTab(show)),
        onShowTradeDataTab: (show) => dispatch(actions.showTradeDataTab(show)),
        onSetUploadFile: (file) => dispatch(actions.setUploadedFile(file)),
        onSetIpicStatistic: (statistic) => dispatch(actions.setIpicStatistic(statistic))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (UploadDataPage);