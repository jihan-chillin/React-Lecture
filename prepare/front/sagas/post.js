import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data) {
  return axios.user('api/post', data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    yield put({
      type: 'ADD_POST_REQUEST',
    });
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
    });
  } catch (e) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: e.respose.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost, 2000);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}
