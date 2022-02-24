import {all, fork, call, put, take} from 'redux-saga/effects'
import axios from 'axios'

// API에선 generator마냥 * 표시하면 절대 안됨.
// 3. API 불러와
function logInAPI(data){
    return axios.post('/api/login', data)
}

function logOutAPI(){
    return axios.post('/api/logout')
}

function addPostAPI(){
    return axios.post('/api/post')
}

// 4. 실행한 API의 결과를 불러오기
function* logIn(action){
    try{
        // API 처리 결과를 result안에 받음
        // 굳이 call이라는 이펙트를 붙이는 이유?! 
        const result = yield call(logInAPI, action.data)
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : result.data
        })
    }catch(e){
        yield put({
            type : 'LOG_IN_FAILURE',
            data : e.response.data
        })
    }
}

function* logOut(){
    try{
        // API 처리 결과를 result안에 받음
        const result = yield call(logOutAPI)
        yield put({
            type : 'LOG_OUT_SUCCESS',
            data : result.data
        })
    }catch(e){
        yield put({
            type : 'LOG_OUT_FAILURE',
            data : e.response.data
        })
    }
}

function* addPost(action){
    try{
        // API 처리 결과를 result안에 받음
        const result = yield call(addPostAPI, action.data)
        yield put({
            type : 'LOG_POST_SUCCESS',
            data : result.data
        })
    }catch(e){
        yield put({
            type : 'LOG_POST_FAILURE',
            data : e.response.data
        })
    }
}

// 1. 이벤트 리스너 같은 역할을 하는 generator를 먼저 만들어주도
function* watchLogin(){
    yield take('LOG_IN_REQUEST', logIn)
}

function* watchLogout(){
    yield take('LOG_OUT_REQUEST', logOut)
}

function* addPost(){
    yield take('ADD_POST_REQUEST', addPost)
}

// 2. fork는 함수를 실행시켜주는 거 (call이랑 다름 )
export default function* rootSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(addPost)
    ])
}