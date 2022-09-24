import * as actionTypes from "./actionTypes";

export const setUploadedFile = (file) => {
    return {
        type: actionTypes.SET_UPLOADED_FILE,
        file: file
    }
};

export const setIpicStatistic = (statistic) => {
    return {
        type: actionTypes.SET_IPIC_STATISTIC,
        statistic: statistic
    }
};