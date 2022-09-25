import * as actionTypes from './actionTypes';

export const setAccountNamesAndNumbersTradeDataFilter = (filter) => {
    return {
        type: actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_TRADE_DATA_FILTER,
        filter: filter
    }
};

export const addToAccountNamesAndNumbersFilterTradeDataList = (item) => {
    return {
        type: actionTypes.ADD_TO_TRADE_DATA_ACCOUNT_NAME_AND_NUMBERS_FILTER_LIST,
        item: item
    }
};

export const removeFromAccountNamesAndNumbersFilterTradeDataList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_TRADE_DATA_ACCOUNT_NAME_AND_NUMBERS_FILTERS_LIST,
        item: item
    }
};

export const setIPAddressTradeDataFilter = (filter) => {
    return {
        type: actionTypes.SET_IP_ADDRESS_TRADE_DATA_FILTER,
        filter: filter
    }
};

export const addToIPAddressFilterTradeDataList = (item) => {
    return {
        type: actionTypes.ADD_TO_TRADE_DATA_IP_ADDRESS_FILTER_LIST,
        item: item
    }
};

export const removeFromIPAddressFilterTradeDataList = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_TRADE_DATA_IP_ADDRESS_FILTER_LIST,
        item: item
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

export const resetTradeDataPage = () => {
    return {
        type: actionTypes.RESET_TRADE_DATA_PAGE
    }
};

export const applyTradeDataFilters = () => {
    return {
        type: actionTypes.APPLY_TRADE_DATA_FILTERS
    }
};