import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    uploadedFile: "",
    ipicStatistic: ""
};

const setUploadedFile = (state, action) => {
    return updateObject( state, {
        uploadedFile: action.file
    });
};

const setIpicStatistic = (state, action) => {
    return updateObject( state, {
        ipicStatistic: action.statistic
    })
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_UPLOADED_FILE : return setUploadedFile(state, action);
        case actionTypes.SET_IPIC_STATISTIC: return setIpicStatistic(state, action);
        default:
            return state;
    }
};

export default reducer;