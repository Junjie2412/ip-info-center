import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './UploadDataPage.css';
import IPICButton from '../../components/IPICButton/IPICButton';
import * as actions from "../../store/actions";
import {connect} from 'react-redux';
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";
import {NavLink} from "react-router-dom";

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

        return (
            <Aux>
                <div className="UploadDataPage">
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
                            <label htmlFor="geolocation">IP Geolocation Data</label>
                            <input type="radio" id="tradedata" name="statistics" value="TRADE" onChange={() => this.props.onSetIpicStatistic("TRADE")}/>
                            <label htmlFor="tradedata">IP Trade Data</label>
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
        ipicStatistic: state.uploadFilesReducer.ipicStatistic
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