import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './GeolocationPage.css';
import * as actions from "../../store/actions";
import connect from "react-redux/es/components/connect";
import IPICDropdown from '../../components/IPICDropdown/IPICDropdown';
import IPICDateRangeDropdown from '../../components/IPICDateRangeDropdown/IPICDateRangeDropdown';
import {format} from 'date-fns';
import IPICButton from "../../components/IPICButton/IPICButton";
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";
import IPICGoogleMaps from "../../components/IPICGoogleMaps/IPICGoogleMaps";

class GeolocationPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Geolocation Data");
        this.props.onShowGeolocationTab(true);
        this.props.onShowTradeDataTab(true);
    }

    toggleAccountNameDropdown = () => {
        if(this.props.showAccountNameDropdown===true) {
            this.props.onShowAccountNameDropdown(false);
        }else{
            this.props.onShowAccountNameDropdown(true);
        }
    };

    toggleRiskLevelDropdown = () => {
        if(this.props.showRiskLevelDropdown===true) {
            this.props.onShowRiskLevelDropdown(false);
        }else{
            this.props.onShowRiskLevelDropdown(true);
        }
    };

    toggleCountriesDropdown = () => {
        if(this.props.showCountriesDropdown===true) {
            this.props.onShowCountriesDropdown(false);
        }else{
            this.props.onShowCountriesDropdown(true);
        }
    };

    toggleIPAddressesDropdown = () => {
        if(this.props.showIPAddressesDropdown===true) {
            this.props.onShowIPAddressesDropdown(false);
        }else{
            this.props.onShowIPAddressesDropdown(true);
        }
    };

    updateDateSelection = (dateRanges) => {
        this.props.onSetStartDate(dateRanges.startDate);
        this.props.onSetEndDate(dateRanges.endDate);
    };

    render () {
        return (
            <Aux>
                <div className={"GeolocationPage"}>
                    <div className={"GeolocationUploadMoreDataButton"}>
                        <UploadFilesButton label={"Upload More Data"}/>
                    </div>
                    <div className="GeolocationDropdownGroup">
                        <div>
                            <IPICDropdown
                                header={"Account Name and Number"}
                                placeholder={"Search and Select"}
                                list={this.props.accountNamesAndNumbers}
                                show={this.props.showAccountNameDropdown}
                                onClickSearch={()=>this.toggleAccountNameDropdown()}
                            />
                        </div>
                        <div>
                            <IPICDateRangeDropdown
                                header={"Period"}
                                placeholder={"Select Date Range"}
                                value={format(this.props.startDate, 'MM/dd/Y')+" - "+format(this.props.endDate, 'MM/dd/Y')}
                                updateDate={this.updateDateSelection}
                                startDate={this.props.startDate}
                                endDate={this.props.endDate}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"Risk Level"}
                                placeholder={"Search and Select"}
                                list={this.props.riskLevels}
                                show={this.props.showRiskLevelDropdown}
                                onClickSearch={(event)=>this.toggleRiskLevelDropdown()}
                            />
                        </div>
                    </div>
                    <div className="GeolocationDropdownGroup">
                        <div>
                            <IPICDropdown
                                header={"Location"}
                                placeholder={"Search and Select"}
                                list={this.props.countries}
                                show={this.props.showCountriesDropdown}
                                onClickSearch={()=>this.toggleCountriesDropdown()}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"IP Addresses"}
                                placeholder={"Search and Select"}
                                list={this.props.ipaddresses}
                                show={this.props.showIPAddressesDropdown}
                                onClickSearch={()=>this.toggleIPAddressesDropdown()}
                            />
                        </div>
                        <div>
                            <div className="GeolocationButton">
                                <IPICButton label={"APPLY"} type={"blue"}/>
                            </div>
                            <div className="GeolocationButton">
                                <IPICButton label={"RESET"} type={"white"}/>
                            </div>
                        </div>
                    </div>
                    <div className="GeolocationExportButton">
                        <IPICButton label={"EXPORT"} type={"blue"}/>
                    </div>
                    <div className={"googleMapsContainer"}>
                        <IPICGoogleMaps/>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.geolocationReducer.countries,
        riskLevels: state.geolocationReducer.riskLevels,
        accountNamesAndNumbers: state.geolocationReducer.accountNamesAndNumbers,
        ipaddresses: state.geolocationReducer.ipaddresses,
        showAccountNameDropdown: state.geolocationReducer.showAccountNameDropdown,
        showRiskLevelDropdown: state.geolocationReducer.showRiskLevelDropdown,
        showCountriesDropdown: state.geolocationReducer.showCountriesDropdown,
        showIPAddressesDropdown: state.geolocationReducer.showIPAddressesDropdown,
        startDate: state.geolocationReducer.startDate,
        endDate: state.geolocationReducer.endDate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onShowAccountNameDropdown: (show) => dispatch(actions.showAccountNameDropdown(show)),
        onShowRiskLevelDropdown: (show) => dispatch(actions.showRiskLevelDropdown(show)),
        onShowCountriesDropdown: (show) => dispatch(actions.showCountriesDropdown(show)),
        onShowIPAddressesDropdown: (show) => dispatch(actions.showIPAddressesDropdown(show)),
        onSetStartDate: (date) => dispatch(actions.setGeolocationStartDate(date)),
        onSetEndDate: (date) => dispatch(actions.setGeolocationEndDate(date)),
        onShowGeolocationTab: (show) => dispatch(actions.showGeolocationTab(show)),
        onShowTradeDataTab: (show) => dispatch(actions.showTradeDataTab(show))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (GeolocationPage);