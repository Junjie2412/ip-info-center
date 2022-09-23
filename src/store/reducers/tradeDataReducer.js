import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    showIPAddressesDropdown: false,
    showAccountNameDropdown: false
};

const showIPAddressesDropdown = (state, action) => {
    return updateObject( state, {
        showIPAddressesDropdown: action.show
    });
};

const showAccountNameDropdown = (state, action) => {
    return updateObject( state, {
        showAccountNameDropdown: action.show
    })
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SHOW_IP_ADDRESSES_TRADE_DATA_DROPDOWN: return showIPAddressesDropdown(state, action);
        case actionTypes.SHOW_ACCOUNT_NAME_TRADE_DATA_DROPDOWN: return showAccountNameDropdown(state, action);
        default:
            return state;
    }
};

export default reducer;