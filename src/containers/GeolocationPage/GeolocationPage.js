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
import { CSVLink } from "react-csv";

class GeolocationPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Geolocation Data");
        this.props.onShowGeolocationTab(true);
        this.props.onSetCenter();
    }

    updateDateSelection = (dateRanges) => {
        this.props.onSetStartDate(dateRanges.startDate);
        this.props.onSetEndDate(dateRanges.endDate);
    };

    handleAccountNamesAndNumbersCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToAccountNamesAndNumbersFilterList(item);
        } else {
            this.props.onRemoveFromAccountNamesAndNumbersFilterList(item);
        }
        this.forceUpdate();
    };

    handleRiskLevelCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToRiskLevelFilterList(item);
        } else {
            this.props.onRemoveFromRiskLevelFilterList(item);
        }
        this.forceUpdate();
    };

    handleLocationCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToLocationFilterList(item);
        } else {
            this.props.onRemoveFromLocationFilterList(item);
        }
        this.forceUpdate();
    };

    handleIPAddressCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToIPAddressFilterList(item);
        } else {
            this.props.onRemoveFromIPAddressFilterList(item);
        }
        this.forceUpdate();
    };

    reset = () => {
        this.props.onReset();
        this.props.onSetCenter();
        this.forceUpdate();
    };

    apply = () => {
        this.props.onApply();
        this.props.onSetCenter();
        this.forceUpdate();
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
                                filterList={this.props.accountNamesAndNumbersFilterList}
                                handleCheck={this.handleAccountNamesAndNumbersCheck}
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
                                filterList={this.props.riskLevelFilterList}
                                handleCheck={this.handleRiskLevelCheck}
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
                                filterList={this.props.locationFilterList}
                                handleCheck={this.handleLocationCheck}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"IP Addresses"}
                                placeholder={"Search and Select"}
                                list={this.props.ipaddresses}
                                filter={this.props.ipAddressFilter}
                                setFilter={(event)=>this.props.onSetIPAddressFilter(event.target.value)}
                                filterList={this.props.ipAddressFilterList}
                                handleCheck={this.handleIPAddressCheck}
                            />
                        </div>
                        <div>
                            <div className="GeolocationButton">
                                <IPICButton label={"APPLY"} type={"blue"} onClick={this.apply}/>
                            </div>
                            <div className="GeolocationButton">
                                <IPICButton label={"RESET"} type={"white"} onClick={this.reset}/>
                            </div>
                        </div>
                    </div>
                    <div className="GeolocationExportButton">
                        <div>
                            <CSVLink data={this.props.geoMarkers}>
                                <IPICButton label={"EXPORT"} type={"blue"}/>
                            </CSVLink>
                        </div>
                    </div>
                    <div className={"googleMapsContainer"}>
                        <IPICGoogleMaps
                            markers={this.props.geoMarkers}
                            setCurrentMarker={this.props.onSetCurrentMarker}
                            currentMarker={this.props.currentMarker}
                            center={{ lat: parseFloat(this.props.center.split(",")[0]), lng: parseFloat(this.props.center.split(",")[1])}}
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
        ipAddressFilter: state.geolocationReducer.ipAddressFilter,
        accountNamesAndNumbersFilterList: state.geolocationReducer.accountNamesAndNumbersFilterList,
        riskLevelFilterList: state.geolocationReducer.riskLevelFilterList,
        locationFilterList: state.geolocationReducer.locationFilterList,
        ipAddressFilterList: state.geolocationReducer.ipAddressFilterList,
        center: state.geolocationReducer.center,
        exportHeaders: state.geolocationReducer.exportHeaders
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
        onSetIPAddressFilter: (filter) => dispatch(actions.setIPAddressFilter(filter)),
        onAddToAccountNamesAndNumbersFilterList: (item) => dispatch(actions.addToAccountNamesAndNumbersFilterList(item)),
        onRemoveFromAccountNamesAndNumbersFilterList: (item) => dispatch(actions.removeFromAccountNamesAndNumbersFilterList(item)),
        onAddToRiskLevelFilterList: (item) => dispatch(actions.addToRiskLevelFilterList(item)),
        onRemoveFromRiskLevelFilterList: (item) => dispatch(actions.removeFromRiskLevelFilterList(item)),
        onAddToLocationFilterList: (item) => dispatch(actions.addToLocationFilterList(item)),
        onRemoveFromLocationFilterList: (item) => dispatch(actions.removeFromLocationFilterList(item)),
        onAddToIPAddressFilterList: (item) => dispatch(actions.addToIPAddressFilterList(item)),
        onRemoveFromIPAddressFilterList: (item) => dispatch(actions.removeFromIPAddressFilterList(item)),
        onReset: () => dispatch(actions.resetGeolocationPage()),
        onApply: () => dispatch(actions.applyGeolocationFilters()),
        onSetCenter: () => dispatch(actions.setCenter())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (GeolocationPage);