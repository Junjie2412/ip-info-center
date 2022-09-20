import * as actionTypes from './actionTypes';

export const setCurrentTab = (tab) => {
    return {
        type: actionTypes.SET_TAB,
        tab: tab
    }
};