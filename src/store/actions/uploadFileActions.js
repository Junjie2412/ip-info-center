import * as actionTypes from "./actionTypes";

export const setUploadedFile = (file) => {
    return {
        type: actionTypes.SET_UPLOADED_FILE,
        file: file
    }
}