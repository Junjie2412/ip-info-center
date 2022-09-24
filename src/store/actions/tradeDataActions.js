import * as actionTypes from './actionTypes';

export const setAccountNamesAndNumbersTradeDataFilter = (filter) => {
    return {
        type: actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_TRADE_DATA_FILTER,
        filter: filter
    }
};

export const setIPAddressTradeDataFilter = (filter) => {
    return {
        type: actionTypes.SET_IP_ADDRESS_TRADE_DATA_FILTER,
        filter: filter
    }
};

export const setTradeDataStartDate = (date) => {
    return {
        type: actionTypes.SET_TRADE_DATA_START_DATE,
        date: date
    }
};

export const setTradeDataEndDate = (date) => {
    return {
        type: actionTypes.SET_TRADE_DATA_END_DATE,
        date: date
    }
};