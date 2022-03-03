import { all, fork } from "redux-saga/effects";

// API에선 generator마냥 * 표시하면 절대 안됨.
// 3. API 불러와
function logInAPI(data){
    return axios.post('/api/login', data)
}

function* logIn(action){
    try{
        // API 처리 결과를 result안에 받음
        // 굳이 call이라는 이펙트를 붙이는 이유?! 
        // const result = yield call(logInAPI, action.data)
        yield delay(1000)
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : action.data,
        })
    }catch(e){
        yield put({
            type : 'LOG_IN_FAILURE',
            data : e.response.data
        })
    }
}

// 1. 이벤트 리스너 같은 역할을 하는 generator를 먼저 만들어주도
// 다만, 한 번 밖에 실행이 안됨 ( 재사용 불가 )
// 이거를 해결하기 위해서 while - yield로 무한사용을 할 수 있음.
function* watchLogin(){
    yield takeLatest('LOG_IN_REQUEST', logIn)
}


function logOutAPI(){
    return axios.post('/api/logout')
}

function* logOut(){
    try{
        // API 처리 결과를 result안에 받음
        // const result = yield call(logOutAPI)
        yield delay(1000)
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

function* watchLogout(){
    yield takeLatest('LOG_OUT_REQUEST', logOut)
}



export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogout),
    ])
}