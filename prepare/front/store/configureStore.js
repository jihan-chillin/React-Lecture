import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from '../reducers/'

const configureStore = () =>{
    const middlewares=[]
    // middleware is not a function
    const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(...middlewares)) 
    : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);
    store.dispatch({
        // 얘를 디스패치 하는 순간 
        // type과 data가 reducer로 전달이 되고,
        // 다음 state로 바뀌게 됨.
        type : 'CHANGE_NICKNAME',
        data : 'jihani'
    })
    return store
}

const wrapper = createWrapper(configureStore,{
        debug : process.env.NODE_ENV === 'development',
});

export default wrapper