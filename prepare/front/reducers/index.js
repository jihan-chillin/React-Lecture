import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    // 이걸 작성하려면 초기데이터 구조를 어느정도 잡아놓고 있어야 함.
    user : {
        isLoggedIn : false, 
        user : null, 
        signUpData : {},
        loginData : {},
    },
    post : {
        mainPosts : [],
    }
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
// 1. state를 바꾸고 싶을 때마다 action을 만들고,
// 만들어진 action을 dispatch할 수 있게 된다. ===> 이 말의 뜻은..?!
// const changeNickname = {
//     type : 'CHANGE_NICKNAME',
//     data : 'jihani'
// }

// 3. aync action creater
// 

// 2. 매번 state값을 바꿔줄 수도 있는 부분은
// 함수로 뽑아내서 동적데이터 집어넣어서 처리할 수 있음!
// action creater
const changeNickname = (data) =>{
    return {
        type : 'CHANGE_NICKNAME',
        // 데이터는 동적으로 처리하기 
        data,
    }
}

changeNickname('Jiphago')
// Store.dispatch(changeNickname('쟈니쟈니'))

// (이전상태, 액션) => 다음 상태
const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case HYDRATE:
        return{
            ...state,
            ...action.payload
        }
        case 'LOG_IN' : 
        return {
            ...state,
            user : {
                ...state.user,
                isLoggedIn : true, 
                user : action.data,
            }
        };
        case 'LOG_OUT' : 
        return {
            ...state,
            user : {
                ...state.user,
                isLoggedIn : false, 
                user : null
            }
        }
        default:
            return state
        
    }
}

export default rootReducer;