import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import { addDays } from 'date-fns';
import {countries} from "../../shared/countries";
import {accounts} from "../../shared/accounts";
import {ipaddresses} from "../../shared/ipaddresses";

const initialState = {
    showAccountNameDropdown: false,
    showRiskLevelDropdown: false,
    showCountriesDropdown: false,
    showIPAddressesDropdown: false,
    riskLevels: [
        {name: "High"},
        {name: "Medium"},
        {name: "Low"}
    ],
    accountNamesAndNumbers: accounts,
    countries: countries,
    ipaddresses: ipaddresses,
    startDate: new Date(),
    endDate: addDays(new Date(), 7)
};

const showAccountNameDropdown = (state, action) => {
    return updateObject( state, {
        showAccountNameDropdown: action.show
    });
};

const showRiskLevelDropdown = (state, action) => {
    return updateObject( state, {
        showRiskLevelDropdown: action.show
    });
};

const showCountriesDropdown = (state, action) => {
    return updateObject( state, {
        showCountriesDropdown: action.show
    });
};

const showIPAddressesDropdown = (state, action) => {
    return updateObject( state, {
        showIPAddressesDropdown: action.show
    });
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

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SHOW_ACCOUNT_NAME_DROPDOWN: return showAccountNameDropdown(state, action);
        case actionTypes.SHOW_RISK_LEVEL_DROPDOWN: return showRiskLevelDropdown(state, action);
        case actionTypes.SHOW_COUNTRIES_DROPDOWN: return showCountriesDropdown(state, action);
        case actionTypes.SHOW_IP_ADDRESSES_DROPDOWN: return showIPAddressesDropdown(state, action);
        case actionTypes.SET_GEOLOCATION_START_DATE: return setGeolocationStartDate(state, action);
        case actionTypes.SET_GEOLOCATION_END_DATE: return setGeolocationEndDate(state, action);
        default:
            return state;
    }
};

export default reducer;