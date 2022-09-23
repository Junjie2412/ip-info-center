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

    openTabs = () => {
        this.props.onShowGeolocationTab(true);
        this.props.onShowTradeDataTab(true);
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
                            <input type="radio" id="geolocation" name="statistics" value="GEO"/>
                            <label htmlFor="geolocation">IP Geolocation Data</label>
                            <input type="radio" id="tradedata" name="statistics" value="TRADE"/>
                            <label htmlFor="tradedata">IP Trade Data</label>
                        </div>
                    </div>
                    <div className="UploadNavSection">
                        <div className="UploadNavButtonGroup">
                            <div className="UploadNavButton">
                                <NavLink to={"/geolocation"}>
                                    <IPICButton onClick={this.openTabs} label={"SUBMIT"} type={"blue"}/>
                                </NavLink>
                            </div>
                            <div className="UploadNavButton">
                                <IPICButton label={"CANCEL"} type={"white"}/>
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
        uploadedFile: state.uploadFilesReducer.uploadedFile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onShowGeolocationTab: (show) => dispatch(actions.showGeolocationTab(show)),
        onShowTradeDataTab: (show) => dispatch(actions.showTradeDataTab(show)),
        onSetUploadFile: (file) => dispatch(actions.setUploadedFile(file))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (UploadDataPage);