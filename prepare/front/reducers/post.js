export const initialState = {
    // 더미데이터 쓸 때, 다른 데이터와 합쳐져서 오는 애들은 '대문자'
    // 그냥 단일로 송수신 되는 데이터는 '소문자'로 작성됨.
    // 그래서 서버개발자에게 어떻게 데이터를 보낼건지 먼저 물어보고 하는 게 중요
    mainPosts : [{
        id : 1,
        User :{
            id : 1,
            nickname : 'kozub'
        },
        content : '첫 번째 더미데이터', 
        Images : [{
            src : 'https://pbs.twimg.com/profile_images/1072730974343979008/ebGYbR-L.jpg'
        },
        {
            src : 'https://pbs.twimg.com/media/ERcRb9eU0AAmv56.jpg'
        },
        {
            src : 'https://pbs.twimg.com/media/FEuPI5uacAECirJ?format=jpg&name=large'
        }
    ],
        Comments : [{
            User : {
                nickname : 'kozubi'
            },
            content : '우왕 너무 귀여워요 >ㅠ<'
        },{
            User : {
                nickname : '쟈니쟈니'
            },
            content : '째보가 나라를 구한다.'
        }]
    }],
    imagePaths : [],
    postAdded : false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST
}
const dummyPost = {
    id : 1,
    content : '더미데이터 고양이로 도배해버리기',
    User : {
        id : 1, 
        nickname : 'kozub'
    },
    imagePaths : [],
    Comments : [],
    // postAdded : false,
}

// 이전 state와 action을 받아서 다음 state를 반환해주는 함수 : reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_POST :
            return{
                ...state,
                //  [dummyPost, ...state.mainPosts] : 최신 더미데이터가 맨 위에 작성됨
                // [...state.mainPosts, dummyPost] : 최신 더미데이터가 맨 아래 작성된
                mainPosts : [dummyPost, ...state.mainPosts],
                postAdded : true,
            }

        default:
            return state;
    }
}

export default reducer