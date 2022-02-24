export const initialState = {
    isLoggedIn : false, 
    me : null, 
    signUpData : {},
    loginData : {},
}

// thunk를 쓰면, 로그인에 전반적인 비동기 액션크리에터를 하나 더 추가해줘야 한다.
// 코드가 간단하지만, thunk를 안쓰는 이유는 한 번에 여러 개의 action을 dispatch를 하는 거 이외에 기능이 없음.
// saga같은 경우 delay 기능 등의 추가적인 기능을 제공해줌.
export const loginAction = (data) =>{
    return(dispatch, getState) =>{
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login').then((res)=>{
            dispatch(loginSuccessAction(res.data))
        })
        .catch((err)=>{
            dispatch(loginFailureAction(err))
        })
    }
}

export const loginRequestAction = (data) =>{
    return {
        type : 'LOG_IN_REQUEST',
        data
    }
}

export const loginSuccessAction = (data) =>{
    return {
        type : 'LOG_IN_SUCCESS',
        data
    }
}

export const loginFailureAction = (data) =>{
    return {
        type : 'LOG_IN_FAILURE',
        data
    }
}

export const logoutRequestAction = (data) =>{
    return {
        type : 'LOG_OUT_REQUEST',
        data
    }
}

export const logoutFailureAction = (data) =>{
    return {
        type : 'LOG_OUT_FAILURE',
        data
    }
}

// 이전 state와 action을 받아서 다음 state를 반환해주는 함수 : reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOG_IN_REQUEST' : 
        return {
            ...state,
            isLoggedIn : true, 
            me : action.data,
        };
        case 'LOG_OUT_REQUEST' : 
        return {
            ...state,
            isLoggedIn : false, 
            me : null
        }
        default:
            return state;
    }
}

export default reducer