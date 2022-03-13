import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import postSaga from './post';

// 2. fork는 함수를 실행시켜주는 거 (call이랑 다름 )
export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}
