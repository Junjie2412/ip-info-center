import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './UploadDataPage.css';
import IPICButton from '../../components/IPICButton/IPICButton';
import * as actions from "../../store/actions";
import {connect} from 'react-redux';
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";

class UploadDataPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Search Criteria");
    }

    render () {
        return (
            <Aux>
                <div className="UploadDataPage">
                    <div className="UploadNavSection">
                        <div className="UploadNavWords">
                            <p>Upload Data</p>
                        </div>
                        <UploadFilesButton label={"Upload Files"}/>
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
                                <IPICButton label={"SUBMIT"} type={"blue"}/>
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

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (UploadDataPage);