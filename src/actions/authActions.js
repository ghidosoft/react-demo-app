import {AUTH_LOGIN_REQUESTED, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT, AUTH_USER_REQUESTED} from '../constants';

export const requestLogin = (username, password) => ({type: AUTH_LOGIN_REQUESTED, payload: {username, password}});
export const loginSuccess = (user) => ({type: AUTH_LOGIN_SUCCESS, payload: {user}});
export const loginFailure = (error) => ({type: AUTH_LOGIN_FAILURE, payload: {error}});
export const logout = () => ({type: AUTH_LOGOUT});
export const requestCurrentUser = () => ({type: AUTH_USER_REQUESTED});
