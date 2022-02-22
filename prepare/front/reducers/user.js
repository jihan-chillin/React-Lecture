export const initialState = {
    isLoggedIn : false, 
    me : null, 
    signUpData : {},
    loginData : {},
}

export const loginAction = (data) =>{
    return {
        type : 'LOG_IN',
        data
    }
}

export const logoutAction = () =>{
    return {
        type : 'LOG_OUT',
    }
}

// 이전 state와 action을 받아서 다음 state를 반환해주는 함수 : reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOG_IN' : 
        return {
            ...state,
            isLoggedIn : true, 
            me : action.data,
        };
        case 'LOG_OUT' : 
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