import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    showIPAddressesDropdown: false
};

const showIPAddressesDropdown = (state, action) => {
    return updateObject( state, {
        showIPAddressesDropdown: action.show
    });
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SHOW_IP_ADDRESSES_TRADE_DATA_DROPDOWN: return showIPAddressesDropdown(state, action);
        default:
            return state;
    }
};

export default reducer;