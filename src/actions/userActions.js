import * as constants from '../constants';

export const userListRequested = () => ({type: constants.USER_LIST_REQUESTED});
export const userListSuccess = (items) => ({type: constants.USER_LIST_SUCCESS, payload: {items}});
export const userListFailure = (error) => ({type: constants.USER_LIST_FAILURE, payload: {error}});
