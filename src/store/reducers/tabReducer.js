import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    currentTab: "",
    showGeolocationTab: false,
    showTradeDataTab: false
};

const setCurrentTab = (state, action) => {
    return updateObject( state, {
        currentTab: action.tab
    });
};

const showGeolocationTab = (state, action) => {
    return updateObject( state, {
        showGeolocationTab: action.show
    });
};

const showTradeDataTab = (state, action) => {
    return updateObject( state, {
        showTradeDataTab: action.show
    });
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_TAB: return setCurrentTab(state, action);
        case actionTypes.SHOW_GEOLOCATION_TAB: return showGeolocationTab(state, action);
        case actionTypes.SHOW_TRADE_DATA_TAB: return showTradeDataTab(state, action);
        default:
            return state;
    }
};

export default reducer;