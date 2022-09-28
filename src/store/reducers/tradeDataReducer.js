import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import {addDays} from "date-fns";
import {tradeDataDatabase, RepsAccessingCustomerAccounts} from "../../shared/tradeDataDatabase";
import {EventDateIPAddressByAccountNumber} from "../../shared/tradeDataLineBarChart";
import {EventDateIpAddressAndAccountNumberBySecuritySymbol} from "../../shared/tradeDataDoubleLineBarChart";
import {CountOfIPAddressByAccountNumber} from "../../shared/tradeDataBarChartOne";

const initialState = {
    accountNamesAndNumbersFilter: "",
    accountNamesAndNumbers: tradeDataDatabase.map((entry) => (entry.name+" ("+entry.account_number+")")).sort(),
    ipaddresses: tradeDataDatabase.map((entry) => entry.ip_address).sort(),
    accountNamesAndNumbersFilterList: [],
    ipAddressFilter: "",
    ipAddressFilterList: [],
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    topValues: 20,
    RepsAccessingCustomerAccountsPieChart : {
        labels: RepsAccessingCustomerAccounts.map((entry) => entry.user_type),
        series: RepsAccessingCustomerAccounts.map((entry => entry.n_transactions))
    },
    CountOfIPAddressByAccountNumberBarChart : {
        labels: CountOfIPAddressByAccountNumber.map((entry) => entry.account_number),
        series: CountOfIPAddressByAccountNumber.map((entry) => entry.n_distinct_ip),
    },
    EventDateIPAddressByAccountNumberLineBarChart : {
        labels: EventDateIPAddressByAccountNumber.map((entry) => entry.account_number),
        columnData: EventDateIPAddressByAccountNumber.map((entry) => entry.active_trading_days),
        lineData: EventDateIPAddressByAccountNumber.map((entry) => entry.n_distinct_ip)
    },
    EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart : {
        labels: EventDateIpAddressAndAccountNumberBySecuritySymbol.map((entry) => entry.security_symbol),
        columnData: EventDateIpAddressAndAccountNumberBySecuritySymbol.map((entry) => entry.active_trading_days),
        lineData: EventDateIpAddressAndAccountNumberBySecuritySymbol.map((entry) => entry.n_distinct_ip),
        areaData: EventDateIpAddressAndAccountNumberBySecuritySymbol.map((entry) => entry.n_distinct_acct_numbers)
    }
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

const resetTradeDataPage = (state) => {
    return updateObject(state, {
        accountNamesAndNumbersFilterList: [],
        ipAddressFilterList: [],
        startDate: new Date(),
        endDate: addDays(new Date(), 7)
    })
};
const applyTradeDataFilters = (state) => {

};


const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_ACCOUNT_NAMES_AND_NUMBERS_TRADE_DATA_FILTER : return setAccountNamesAndNumbersFilter(state, action);
        case actionTypes.SET_IP_ADDRESS_TRADE_DATA_FILTER: return setIPAddressFilter(state, action);
        case actionTypes.SET_TRADE_DATA_START_DATE: return setTradeDataStartDate(state, action);
        case actionTypes.SET_TRADE_DATA_END_DATE: return setTradeDataEndDate(state, action);
        case actionTypes.ADD_TO_TRADE_DATA_ACCOUNT_NAME_AND_NUMBERS_FILTER_LIST: return addToAccountNamesAndNumbersFilterList(state, action);
        case actionTypes.REMOVE_FROM_TRADE_DATA_ACCOUNT_NAME_AND_NUMBERS_FILTERS_LIST: return removeFromAccountNamesAndNumbersFilterList(state, action);
        case actionTypes.ADD_TO_TRADE_DATA_IP_ADDRESS_FILTER_LIST: return addToIPAddressFilterList(state, action);
        case actionTypes.REMOVE_FROM_TRADE_DATA_IP_ADDRESS_FILTER_LIST: return removeFromIPAddressFilterList(state, action);
        case actionTypes.RESET_TRADE_DATA_PAGE: return resetTradeDataPage(state);
        case actionTypes.APPLY_TRADE_DATA_FILTERS: return applyTradeDataFilters(state);
        default:
            return state;
    }
};

export default reducer;