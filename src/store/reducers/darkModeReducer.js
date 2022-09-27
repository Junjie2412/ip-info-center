import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    darkMode: false
};

const toggleDarkMode = (state) => {
    return updateObject( state, {
        darkMode: !state.darkMode
    });
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.TOGGLE_DARK_MODE: return toggleDarkMode(state, action);
        default:
            return state;
    }
};

export default reducer;