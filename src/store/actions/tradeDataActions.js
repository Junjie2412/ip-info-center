import * as actionTypes from './actionTypes';

export const showIPAddressesTradeDataDropdown = (show) => {
    return {
        type: actionTypes.SHOW_IP_ADDRESSES_TRADE_DATA_DROPDOWN,
        show: show
    }
};