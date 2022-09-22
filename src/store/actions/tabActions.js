import * as actionTypes from './actionTypes';

export const setCurrentTab = (tab) => {
    return {
        type: actionTypes.SET_TAB,
        tab: tab
    }
};

export const showGeolocationTab = (show) => {
    return {
        type: actionTypes.SHOW_GEOLOCATION_TAB,
        show: show
    }
};

export const showTradeDataTab = (show) => {
    return {
        type: actionTypes.SHOW_TRADE_DATA_TAB,
        show: show
    }
};