// This object initializes login data
export const initialUserState = {
  username: '',
  password: '',
  usertype: 'user',
  country: 'Brazil',
  isAdmin: false,
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

// This reducer handles dispatches to update global user state
export const userReducer = (state = initialUserState, action) => {
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
        usertype: action.payload.usertype,
        username: action.payload.username,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
        usertype: 'user',
        country: '',
        isAdmin: false,
      };
    case 'LOGIN_TRUE':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return {
        ...initialUserState,
      };
    default:
      return state;
  }
};
