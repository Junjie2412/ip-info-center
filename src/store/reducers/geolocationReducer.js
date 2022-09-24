import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import { addDays } from 'date-fns';
import {countries} from "../../shared/countries";
import {geolocationDatabase} from "../../shared/geolocationDatabase";

const initialState = {
    riskLevels: ["High","Medium","Low"],
    riskLevelFilter: "",
    accountNamesAndNumbers: geolocationDatabase.map((entry) => (entry.name+" ("+entry.account_number+")")).sort(),
    accountNamesAndNumbersFilter: "",
    countries: countries.map((entry) => (entry.name)).sort(),
    locationFilter: "",
    ipaddresses: geolocationDatabase.map((entry) => entry.ip_address).sort(),
    ipAddressFilter: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    geoMarkers: geolocationDatabase,
    currentMarker: ""
};

const setAccountNamesAndNumbersFilter = (state, action) => {
    return updateObject( state, {
        accountNamesAndNumbersFilter: action.filter
    })
};

const setRiskLevelFilter = (state, action) => {
    return updateObject( state, {
        riskLevelFilter: action.filter
    })
};

const setLocationFilter = (state, action) => {
    return updateObject( state, {
        locationFilter: action.filter
    })
};

const setIPAddressFilter = (state, action) => {
    return updateObject( state, {
        ipAddressFilter: action.filter
    })
};

const setGeolocationStartDate = (state, action) => {
    return updateObject( state, {
        startDate: new Date(action.date)
    })
};

const setGeolocationEndDate = (state, action) => {
    return updateObject( state, {
        endDate: new Date(action.date)
    })
};

const setCurrentMarker = (state, action) => {
    return updateObject( state, {
        currentMarker: action.marker
    })
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_GEOLOCATION_START_DATE: return setGeolocationStartDate(state, action);
        case actionTypes.SET_GEOLOCATION_END_DATE: return setGeolocationEndDate(state, action);
        case actionTypes.SET_CURRENT_MARKER: return setCurrentMarker(state, action);
        case actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_FILTER: return setAccountNamesAndNumbersFilter(state, action);
        case actionTypes.SET_RISK_LEVEL_FILTER: return setRiskLevelFilter(state, action);
        case actionTypes.SET_LOCATION_FILTER: return setLocationFilter(state, action);
        case actionTypes.SET_IP_ADDRESS_FILTER: return setIPAddressFilter(state, action);
        default:
            return state;
    }
};

export default reducer;