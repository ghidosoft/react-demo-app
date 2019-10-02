import * as constants from '../constants';

const INITIAL_STATE = {
    loading: false,
    item: [],
    items: [],
    error: null,
};

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.USER_LIST_REQUESTED:
            return Object.assign({}, state, {loading: true, error: null, items: []});
        case constants.USER_LIST_SUCCESS:
            return Object.assign({}, state, {loading: false, items: action.payload.items});
        case constants.USER_LIST_FAILURE:
        case constants.USER_DETAIL_FAILURE:
            return Object.assign({}, state, {loading: false, error: action.payload.error});
        case constants.USER_DETAIL_REQUESTED:
            return Object.assign({}, state, {loading: true, error: null, item: null});
        case constants.USER_DETAIL_SUCCESS:
            return Object.assign({}, state, {loading: false, item: action.payload.item});
        default:
            return state;
    }
}

export default userReducer;
