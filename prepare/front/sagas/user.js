import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.user('api/login', data);
}

function* login(action) {
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_IN_REQUEST',
      data: action.data,
    });
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
    });
  } catch (e) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: e.respose.data,
    });
  }
}

function logOutAPI() {
  return axios.user('api/logout');
}

function* logout() {
  try {
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_REQUEST',
    });
    // const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (e) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: e.respose.data,
    });
  }
}

function* watchLogIn() {
  // 로그인 액션이 실행될 때 까지 기다리겠다. take('LOG_IN')
  // 들어왔다? 그럼 login generator 실행 (function* login)
  yield takeLatest('LOG_IN_REQUEST', login);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logout);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
}
