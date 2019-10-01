import {fork, all, call, put} from 'redux-saga/effects';
import * as api from '../services/api';
import {loginSuccess, logout} from '../actions/authActions';
import authSagas from './authSagas';

function* checkLogin() {
    try {
        const response = yield call(api.authMe);
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(logout());
    }
}

export default function* rootSaga() {
    yield all([
        fork(checkLogin),
        fork(authSagas),
    ]);
}
