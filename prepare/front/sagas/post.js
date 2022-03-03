import axios from 'axios'
import { all, fork } from "redux-saga/effects";

function addPostAPI(data){
    return axios.post('/api/post', data)
}

function* addPost(action){
    try{
        // API 처리 결과를 result안에 받음
        // const result = yield call(addPostAPI, action.data)
        yield delay(1000)
        yield put({
            type : 'LOG_POST_SUCCESS',
            // data : result.data
        })
    }catch(e){
        yield put({
            type : 'LOG_POST_FAILURE',
            data : e.response.data
        })
    }
}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST', addPost)
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost)
    ])
}