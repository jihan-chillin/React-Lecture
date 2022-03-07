import { all, fork, delay, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
} from '../reducers/user';

// API에선 generator마냥 * 표시하면 절대 안됨.
// 3. API 불러와
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // API 처리 결과를 result안에 받음
    // 굳이 call이라는 이펙트를 붙이는 이유?!
    // const result = yield call(logInAPI, action.data)
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

// 1. 이벤트 리스너 같은 역할을 하는 generator를 먼저 만들어주도
// 다만, 한 번 밖에 실행이 안됨 ( 재사용 불가 )
// 이거를 해결하기 위해서 while - yield로 무한사용을 할 수 있음.
// function* watchLogin(){
//     yield takeLatest('LOG_IN_REQUEST', logIn)
// }

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // API 처리 결과를 result안에 받음
    // const result = yield call(logOutAPI)
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signup');
}

function* signUp() {
  try {
    // API 처리 결과를 result안에 받음
    // const result = yield call(logOutAPI)
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function followAPI() {
  return axios.post('/api/signup');
}

function* follow() {
  try {
    // API 처리 결과를 result안에 받음
    // const result = yield call(logOutAPI)
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: FOLLOW_FAILURE,
      error: e.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogout),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}
