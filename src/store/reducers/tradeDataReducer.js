import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import {addDays} from "date-fns";
import {tradeDataDatabase} from "../../shared/tradeDataDatabase";

const initialState = {
    accountNamesAndNumbersFilter: "",
    accountNamesAndNumbers: tradeDataDatabase.map((entry) => (entry.name+" ("+entry.account_number+")")).sort(),
    ipaddresses: tradeDataDatabase.map((entry) => entry.ip_address).sort(),
    ipAddressFilter: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 7)
};

const setAccountNamesAndNumbersFilter = (state, action) => {
    return updateObject( state, {
        accountNamesAndNumbersFilter: action.filter
    })
};

const setIPAddressFilter = (state, action) => {
    return updateObject( state, {
        ipAddressFilter: action.filter
    })
};

const setTradeDataStartDate = (state, action) => {
    return updateObject( state, {
        startDate: new Date(action.date)
    })
};

const setTradeDataEndDate = (state, action) => {
    return updateObject( state, {
        endDate: new Date(action.date)
    })
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_TRADE_DATA_FILTER : return setAccountNamesAndNumbersFilter(state, action);
        case actionTypes.SET_IP_ADDRESS_TRADE_DATA_FILTER: return setIPAddressFilter(state, action);
        case actionTypes.SET_TRADE_DATA_START_DATE: return setTradeDataStartDate(state, action);
        case actionTypes.SET_TRADE_DATA_END_DATE: return setTradeDataEndDate(state, action);
        default:
            return state;
    }
};

export default reducer;