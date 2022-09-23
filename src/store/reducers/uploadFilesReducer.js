import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    uploadedFile: ""
};

const setUploadedFile = (state, action) => {
    return updateObject( state, {
        uploadedFile: action.file
    });
};

const reducer = ( state = initialState, action ) =>
{
    switch (action.type) {
        case actionTypes.SET_UPLOADED_FILE : return setUploadedFile(state, action);
        default:
            return state;
    }
};

export default reducer;