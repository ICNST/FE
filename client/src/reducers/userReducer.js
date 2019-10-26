// This object initializes login data
export const initialUserState = {
  username: '',
  usertype: '',
  country_id: null,
  country: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
  registeredUsers: [],
  adminUsers: [],
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
        usertype: action.role,
        username: action.username,
        country_id: action.country_id,
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
        country_id: null,
        isAdmin: false,
      };
    case 'LOGIN_TRUE':
      return { ...state, isLoggedIn: true };
    case 'REGISTRATION_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        usertype: 'user',
        username: action.username,
        country_id: action.country_id,
      };
    case 'REGISTRATION_FAILURE':
      return {
        ...state,
        error: 'That username is already taken!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
        usertype: '',
        country: '',
        country_id: null,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        username: action.username,
        usertype: action.role,
        country_id: action.country_id,
      };
    case 'LOGOUT':
      return {
        ...initialUserState,
      };
    default:
      return state;
  }
};
