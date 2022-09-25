import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import { addDays } from 'date-fns';
import {countries} from "../../shared/countries";
import {geolocationDatabase} from "../../shared/geolocationDatabase";

const initialState = {
    riskLevels: ["High","Medium","Low"],
    riskLevelFilter: "",
    riskLevelFilterList: [],
    accountNamesAndNumbers: geolocationDatabase.map((entry) => (entry.name+" ("+entry.account_number+")")).sort(),
    accountNamesAndNumbersFilter: "",
    accountNamesAndNumbersFilterList: [],
    countries: countries.map((entry) => (entry.name)).sort(),
    locationFilter: "",
    locationFilterList: [],
    ipaddresses: geolocationDatabase.map((entry) => entry.ip_address).sort(),
    ipAddressFilter: "",
    ipAddressFilterList: [],
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    geoMarkersFullList: geolocationDatabase,
    geoMarkers: geolocationDatabase,
    currentMarker: "",
    center: "",
    exportHeaders: [
        { label: "Account Name", key: "name" },
        { label: "Date of Birth", key: "dob" },
        { label: "Phone Number", key: "homephone" },
        { label: "Address", key: "street" },
        { label: "State", key: "state"},
        { label: "Firm", key: "firmname"}
        ]
};

const setAccountNamesAndNumbersFilter = (state, action) => {
    return updateObject( state, {
        accountNamesAndNumbersFilter: action.filter
    })
};

const addToAccountNamesAndNumbersFilterList = (state, action) => {
    const updatedList = state.accountNamesAndNumbersFilterList.concat(action.item);
    return updateObject( state, {
        accountNamesAndNumbersFilterList: updatedList
    })
};

const removeFromAccountNamesAndNumbersFilterList = (state, action) => {
    const updatedList = state.accountNamesAndNumbersFilterList;
    if (updatedList.includes(action.item)) updatedList.splice(updatedList.indexOf(action.item), 1);
    return updateObject( state, {
        accountNamesAndNumbersFilterList: updatedList
    })
};

const setRiskLevelFilter = (state, action) => {
    return updateObject( state, {
        riskLevelFilter: action.filter
    })
};

const addToRiskLevelFilterList = (state, action) => {
    const updatedList = state.riskLevelFilterList.concat(action.item);
    return updateObject( state, {
        riskLevelFilterList: updatedList
    })
};

const removeFromRiskLevelFilterList = (state, action) => {
    const updatedList = state.riskLevelFilterList;
    if (updatedList.includes(action.item)) updatedList.splice(updatedList.indexOf(action.item), 1);
    return updateObject( state, {
        riskLevelFilterList: updatedList
    })
};

const setLocationFilter = (state, action) => {
    return updateObject( state, {
        locationFilter: action.filter
    })
};

const addToLocationFilterList = (state, action) => {
    const updatedList = state.locationFilterList.concat(action.item);
    return updateObject( state, {
        locationFilterList: updatedList
    })
};

const removeFromLocationFilterList = (state, action) => {
    const updatedList = state.locationFilterList;
    if (updatedList.includes(action.item)) updatedList.splice(updatedList.indexOf(action.item), 1);
    return updateObject( state, {
        locationFilterList: updatedList
    })
};

const setIPAddressFilter = (state, action) => {
    return updateObject( state, {
        ipAddressFilter: action.filter
    })
};

const addToIPAddressFilterList = (state, action) => {
    const updatedList = state.ipAddressFilterList.concat(action.item);
    return updateObject( state, {
        ipAddressFilterList: updatedList
    })
};

const removeFromIPAddressFilterList = (state, action) => {
    const updatedList = state.ipAddressFilterList;
    if (updatedList.includes(action.item)) updatedList.splice(updatedList.indexOf(action.item), 1);
    return updateObject( state, {
        ipAddressFilterList: updatedList
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

const resetGeolocationPage = (state) => {
    return updateObject( state, {
        riskLevelFilterList: [],
        accountNamesAndNumbersFilterList: [],
        locationFilterList: [],
        ipAddressFilterList: [],
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        geoMarkers: geolocationDatabase
    })
};

const applyGeolocationFilters = (state) => {
    let updatedList = geolocationDatabase;
    if (state.riskLevelFilterList.length > 0) (updatedList = updatedList.filter(item => {
        return state.riskLevelFilterList.includes(item.risk_label)
    }));
    if (state.accountNamesAndNumbersFilterList.length > 0) (updatedList = updatedList.filter(item => {
        return state.accountNamesAndNumbersFilterList.includes(item.name+" ("+item.account_number+")")
    }));
    if (state.locationFilterList.length > 0) (updatedList = updatedList.filter(item => {
        return state.locationFilterList.includes(item.ip_country)
    }));
    if (state.ipAddressFilterList.length > 0) (updatedList = updatedList.filter(item => {
        return state.ipAddressFilterList.includes(item.ip_address)
    }));
    return updateObject( state, {
        geoMarkers: updatedList
    })
};

const setCenter = (state)  => {
    let lat = 0;
    let long = 0;
    for (let marker of state.geoMarkers) {
        lat= lat + parseFloat(marker.ip_coordinates.split(",")[0]);
        long = long + parseFloat(marker.ip_coordinates.split(",")[1])
    }
    for (let marker of state.geoMarkers) {
        lat= lat + parseFloat(marker.cust_coordinates.split(",")[0]);
        long = long + parseFloat(marker.cust_coordinates.split(",")[1])
    }
    lat=lat/(state.geoMarkers.length*2);
    long =long/(state.geoMarkers.length*2);
    return updateObject( state, {
        center: lat+","+long
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
        case actionTypes.ADD_TO_ACCOUNT_NAME_AND_NUMBERS_FILTER_LIST: return addToAccountNamesAndNumbersFilterList(state, action);
        case actionTypes.REMOVE_FROM_ACCOUNT_NAME_AND_NUMBERS_FILTERS_LIST: return removeFromAccountNamesAndNumbersFilterList(state, action);
        case actionTypes.ADD_TO_RISK_LEVEL_FILTER_LIST: return addToRiskLevelFilterList(state, action);
        case actionTypes.REMOVE_FROM_RISK_LEVEL_FILTERS_LIST: return removeFromRiskLevelFilterList(state, action);
        case actionTypes.ADD_TO_LOCATION_FILTER_LIST: return addToLocationFilterList(state, action);
        case actionTypes.REMOVE_FROM_LOCATION_FILTERS_LIST: return removeFromLocationFilterList(state, action);
        case actionTypes.ADD_TO_IP_ADDRESS_FILTER_LIST: return addToIPAddressFilterList(state, action);
        case actionTypes.REMOVE_FROM_IP_ADDRESS_FILTERS_LIST: return removeFromIPAddressFilterList(state, action);
        case actionTypes.RESET_GEOLOCATION_PAGE: return resetGeolocationPage(state);
        case actionTypes.APPLY_GEOLOCATION_FILTERS: return applyGeolocationFilters(state);
        case actionTypes.SET_CENTER: return setCenter(state);
        default:
            return state;
    }
};

export default reducer;