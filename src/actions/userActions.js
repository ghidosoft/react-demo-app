import * as constants from '../constants';

export const userListRequested = () => ({type: constants.USER_LIST_REQUESTED});
export const userListSuccess = (items) => ({type: constants.USER_LIST_SUCCESS, payload: {items}});
export const userListFailure = (error) => ({type: constants.USER_LIST_FAILURE, payload: {error}});

export const userDetailRequested = (id) => ({type: constants.USER_DETAIL_REQUESTED, payload: {id}});
export const userDetailSuccess = (item) => ({type: constants.USER_DETAIL_SUCCESS, payload: {item}});
export const userDetailFailure = (error) => ({type: constants.USER_DETAIL_FAILURE, payload: {error}});
