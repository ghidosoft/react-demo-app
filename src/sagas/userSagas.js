import {take, fork, all, call, put} from 'redux-saga/effects';
import * as constants from '../constants';
import * as api from '../services/api';
import * as actions from '../actions/userActions';

function* watchUserList() {
    while (true) {
        yield take(constants.USER_LIST_REQUESTED);
        try {
            const response = yield call(api.userList);
            yield put(actions.userListSuccess(response.data));
        } catch (error) {
            yield put(actions.userListFailure(error));
        }
    }
}

export default function* root() {
    yield all([
        fork(watchUserList),
    ]);
}
