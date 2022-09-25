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

export const addToAccountNamesAndNumbersFilterList = (item) => {
    return {
        type: actionTypes.ADD_TO_ACCOUNT_NAME_AND_NUMBERS_FILTER_LIST,
        item: item
    }
};

export const removeFromAccountNamesAndNumbersFilterList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_ACCOUNT_NAME_AND_NUMBERS_FILTERS_LIST,
        item: item
    }
};

export const setRiskLevelFilter = (filter) => {
    return {
        type: actionTypes.SET_RISK_LEVEL_FILTER,
        filter: filter
    }
};

export const addToRiskLevelFilterList = (item) => {
    return {
        type: actionTypes.ADD_TO_RISK_LEVEL_FILTER_LIST,
        item: item
    }
};

export const removeFromRiskLevelFilterList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_RISK_LEVEL_FILTERS_LIST,
        item: item
    }
};

export const setLocationFilter = (filter) => {
    return {
        type: actionTypes.SET_LOCATION_FILTER,
        filter: filter
    }
};

export const addToLocationFilterList = (item) => {
    return {
        type: actionTypes.ADD_TO_LOCATION_FILTER_LIST,
        item: item
    }
};

export const removeFromLocationFilterList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_LOCATION_FILTERS_LIST,
        item: item
    }
};

export const setIPAddressFilter = (filter) => {
    return {
        type: actionTypes.SET_IP_ADDRESS_FILTER,
        filter: filter
    }
};

export const addToIPAddressFilterList = (item) => {
    return {
        type: actionTypes.ADD_TO_IP_ADDRESS_FILTER_LIST,
        item: item
    }
};

export const removeFromIPAddressFilterList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_IP_ADDRESS_FILTERS_LIST,
        item: item
    }
};

export const resetGeolocationPage = () => {
    return {
        type: actionTypes.RESET_GEOLOCATION_PAGE
    }
};

export const applyGeolocationFilters = () => {
    return {
        type: actionTypes.APPLY_GEOLOCATION_FILTERS
    }
};

export const setCenter = () => {
    return {
        type:actionTypes.SET_CENTER
    }
}