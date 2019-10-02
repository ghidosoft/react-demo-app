import * as constants from '../constants';

const INITIAL_STATE = {
    loading: false,
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
                return Object.assign({}, state, {loading: false, error: action.payload.error});
        default:
            return state;
    }
}

export default userReducer;
