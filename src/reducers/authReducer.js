import {AUTH_LOGIN_REQUESTED, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT} from '../constants';

const INITIAL_STATE = {
    firstLoading: true,
    logged: false,
    loading: false,
    error: null,
    user: null,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_LOGIN_REQUESTED:
            return Object.assign({}, state, {loading: true, logged: false, error: null, user: null, firstLoading: false});
        case AUTH_LOGIN_SUCCESS:
            return Object.assign({}, state, {loading: false, logged: true, error: null, user: action.payload.user, firstLoading: false});
        case AUTH_LOGIN_FAILURE:
            return Object.assign({}, state, {loading: false, logged: false, error: action.payload.error, user: null, firstLoading: false});
        case AUTH_LOGOUT:
            return Object.assign({}, INITIAL_STATE, {firstLoading: false});
        default:
            return state;
    }
}
