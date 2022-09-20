import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    currentTab: ""
};

const setCurrentTab = (state, action) => {
    return updateObject( state, {
        currentTab: action.tab
    });
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_TAB: return setCurrentTab(state, action);
        default:
            return state;
    }
};

export default reducer;