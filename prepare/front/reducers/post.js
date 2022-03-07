export const initialState = {
  // 더미데이터 쓸 때, 다른 데이터와 합쳐져서 오는 애들은 '대문자'
  // 그냥 단일로 송수신 되는 데이터는 '소문자'로 작성됨.
  // 그래서 서버개발자에게 어떻게 데이터를 보낼건지 먼저 물어보고 하는 게 중요
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'kozub',
    },
    content: '첫 번째 더미데이터 #리덕스 #본격적으로시작전 #프로퇴사러',
    Images: [{
      src: 'https://pbs.twimg.com/profile_images/1072730974343979008/ebGYbR-L.jpg',
    },
    {
      src: 'https://pbs.twimg.com/media/ERcRb9eU0AAmv56.jpg',
    },
    {
      src: 'https://pbs.twimg.com/media/FEuPI5uacAECirJ?format=jpg&name=large',
    },
    ],
    Comments: [{
      User: {
        nickname: 'kozubi',
      },
      content: '우왕 너무 귀여워요 >ㅠ<',
    }, {
      User: {
        nickname: '쟈니쟈니',
      },
      content: '째보가 나라를 구한다.',
    }],
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: 1,
  content: data,
  User: {
    id: 1,
    nickname: 'kozub',
  },
  imagePaths: [],
  Comments: [],
  // postAdded : false,
});

// 이전 state와 action을 받아서 다음 state를 반환해주는 함수 : reducer
const reducer = (action, state = initialState) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
