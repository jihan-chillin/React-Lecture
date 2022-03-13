export const initialState = {
  loginLoading: false,
  isLoggedIn: false,
  logoutLoading: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const logInRequestAction = (data) => ({
  type: 'LOG_IN_REQUEST',
  data,
});

export const logOutRequestAction = () => ({
  type: 'LOG_OUT_REQUEST',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        loginLoading: true,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'kozub' },
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'kozub' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: true,
      };
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        logoutLoading: true,
        isLoggedIn: false,
        me: null,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        logoutLoading: false,
        isLoggedIn: true,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        logoutLoading: false,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
