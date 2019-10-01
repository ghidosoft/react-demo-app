import {take, fork, all, call, put} from 'redux-saga/effects';
import * as constants from '../constants';
import * as api from '../services/api';
import {loginSuccess, loginFailure} from '../actions/authActions';

function* watchLogin() {
    while (true) {
        const {payload} = yield take(constants.AUTH_LOGIN_REQUESTED);
        try {
            const response = yield call(api.authLogin, payload.username, payload.password);
            yield put(loginSuccess(response.data));
        } catch (error) {
            yield put(loginFailure(error));
        }
    }
}

function* watchLogout() {
    while (true) {
        yield take(constants.AUTH_LOGOUT);
        try {
            yield call(api.authLogout);
        } catch (error) {
            // No error
        }
    }
}

export default function* root() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
    ]);
}
