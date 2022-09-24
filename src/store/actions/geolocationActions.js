import * as actionTypes from './actionTypes';

export const setGeolocationStartDate = (date) => {
    return {
        type: actionTypes.SET_GEOLOCATION_START_DATE,
        date: date
    }
};

export const setGeolocationEndDate = (date) => {
    return {
        type: actionTypes.SET_GEOLOCATION_END_DATE,
        date: date
    }
};

export const setCurrentMarker = (marker) => {
    return {
        type: actionTypes.SET_CURRENT_MARKER,
        marker: marker
    }
};

export const setAccountNamesAndNumbersFilter = (filter) => {
    return {
        type: actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_FILTER,
        filter: filter
    }
};

export const setRiskLevelFilter = (filter) => {
    return {
        type: actionTypes.SET_RISK_LEVEL_FILTER,
        filter: filter
    }
};

export const setLocationFilter = (filter) => {
    return {
        type: actionTypes.SET_LOCATION_FILTER,
        filter: filter
    }
};

export const setIPAddressFilter = (filter) => {
    return {
        type: actionTypes.SET_IP_ADDRESS_FILTER,
        filter: filter
    }
};