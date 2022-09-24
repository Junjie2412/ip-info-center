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
    }

    updateDateSelection = (dateRanges) => {
        this.props.onSetStartDate(dateRanges.startDate);
        this.props.onSetEndDate(dateRanges.endDate);
    };

    handleCheck = (event, item) => {
        if (event.target.checked) {
            console.log(item); //Add item to a filter list
        } else {
            console.log("NO "+item)//Remove item from a filtered list
        }
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
                                filter={this.props.accountNamesAndNumbersFilter}
                                setFilter={(event)=>this.props.onSetAccountNamesAndNumbersFilter(event.target.value)}
                                handleCheck={this.handleCheck}
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
                                filter={this.props.riskLevelFilter}
                                setFilter={(event)=>this.props.onSetRiskLevelFilter(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="GeolocationDropdownGroup">
                        <div>
                            <IPICDropdown
                                header={"Location"}
                                placeholder={"Search and Select"}
                                list={this.props.countries}
                                filter={this.props.locationFilter}
                                setFilter={(event)=>this.props.onSetLocationFilter(event.target.value)}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"IP Addresses"}
                                placeholder={"Search and Select"}
                                list={this.props.ipaddresses}
                                filter={this.props.ipAddressFilter}
                                setFilter={(event)=>this.props.onSetIPAddressFilter(event.target.value)}
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
                        <div>
                            <IPICButton label={"EXPORT"} type={"blue"}/>
                        </div>
                    </div>
                    <div className={"googleMapsContainer"}>
                        <IPICGoogleMaps
                            markers={this.props.geoMarkers}
                            setCurrentMarker={this.props.onSetCurrentMarker}
                            currentMarker={this.props.currentMarker}
                        />
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
        startDate: state.geolocationReducer.startDate,
        endDate: state.geolocationReducer.endDate,
        geoMarkers: state.geolocationReducer.geoMarkers,
        currentMarker: state.geolocationReducer.currentMarker,
        accountNamesAndNumbersFilter: state.geolocationReducer.accountNamesAndNumbersFilter,
        riskLevelFilter: state.geolocationReducer.riskLevelFilter,
        locationFilter: state.geolocationReducer.locationFilter,
        ipAddressFilter: state.geolocationReducer.ipAddressFilter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onSetStartDate: (date) => dispatch(actions.setGeolocationStartDate(date)),
        onSetEndDate: (date) => dispatch(actions.setGeolocationEndDate(date)),
        onShowGeolocationTab: (show) => dispatch(actions.showGeolocationTab(show)),
        onSetCurrentMarker: (marker) => dispatch(actions.setCurrentMarker(marker)),
        onSetAccountNamesAndNumbersFilter: (filter) => dispatch(actions.setAccountNamesAndNumbersFilter(filter)),
        onSetRiskLevelFilter: (filter) => dispatch(actions.setRiskLevelFilter(filter)),
        onSetLocationFilter: (filter) => dispatch(actions.setLocationFilter(filter)),
        onSetIPAddressFilter: (filter) => dispatch(actions.setIPAddressFilter(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (GeolocationPage);