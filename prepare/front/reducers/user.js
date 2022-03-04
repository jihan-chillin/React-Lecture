export const initialState = {
    logInLoading : false, // 로그인 시도중
    logInDone : false, 
    logInError : null, 
    logOutLoading : false, 
    logOutDone : false, 
    logOutError : null, 
    SignUpLoading : false, 
    SignUpDone : false, 
    SignUpError : null, 
    me : 'null', 
    signUpData : {},
    loginData : {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'



// thunk를 쓰면, 로그인에 전반적인 비동기 액션크리에터를 하나 더 추가해줘야 한다.
// 코드가 간단하지만, thunk를 안쓰는 이유는 한 번에 여러 개의 action을 dispatch를 하는 거 이외에 기능이 없음.
// saga같은 경우 delay 기능 등의 추가적인 기능을 제공해줌.
// export const loginAction = (data) =>{
//     return(dispatch, getState) =>{
//         const state = getState();
//         dispatch(loginRequestAction());
//         axios.post('/api/login').then((res)=>{
//             dispatch(loginSuccessAction(res.data))
//         })
//         .catch((err)=>{
//             dispatch(loginFailureAction(err))
//         })
//     }
// }

export const loginRequestAction = (data) =>{
    return {
        type : LOG_IN_REQUEST,
        data
    }
}

export const logoutRequestAction = () =>{
    return {
        type : LOG_OUT_REQUEST,   
    }
}

// 이전 state와 action을 받아서 다음 state를 반환해주는 함수 : reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOG_IN_REQUEST : 
        return {
            ...state,
            // 로딩창일 땐, loginError가 늘 null가 되어야 한다.
            logInLoading : true, 
            logInError : null, 
            logInDone : false,
        };
        case LOG_IN_SUCCESS : 
        return {
            ...state,
            logInLoading : false,
            logInError : true, 
            me : {...action.data, nickname : 'kozub'},
        };
        case LOG_IN_FAILURE : 
        return {
            ...state,
            logInLoading : false,
            logInError : false, 
        };
        case LOG_OUT_REQUEST : 
        return {
            ...state,
            isLoggingOut : true,
        }
        case LOG_OUT_SUCCESS : 
        return {
            ...state,
            isLoggingOut : false,
            isLoggedIn : false, 
            me : null
        };
        case LOG_OUT_FAILURE : 
        return {
            ...state,
            isLoggingOut : false,
    
        };
        default:
            return state;
    }
}

export default reducer