import * as actionTypes from './actionTypes';

export const showAccountNameDropdown = (show) => {
    return {
        type: actionTypes.SHOW_ACCOUNT_NAME_DROPDOWN,
        show: show
    }
};

export const showRiskLevelDropdown = (show) => {
    return {
        type: actionTypes.SHOW_RISK_LEVEL_DROPDOWN,
        show: show
    }
};

export const showCountriesDropdown = (show) => {
    return {
        type: actionTypes.SHOW_COUNTRIES_DROPDOWN,
        show: show
    }
};

export const showIPAddressesDropdown = (show) => {
    return {
        type: actionTypes.SHOW_IP_ADDRESSES_DROPDOWN,
        show: show
    }
};

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
}