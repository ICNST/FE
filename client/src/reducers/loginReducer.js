export const initialLoginState = {
  username: '',
  password: '',
  usertype: '',
  country: '',
  isAdmin: false,
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case 'FIELD':
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case 'LOGIN_START':
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
        usertype: '',
        country: '',
        isAdmin: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
