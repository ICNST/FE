export const initialState = {
  countries: [],
  country: '',
  communities: [],
  community: '',
  children: [],
  child: '',
  isGetting: false,
  error: '',
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_START':
      return {
        ...state,
        isGetting: true,
        error: '',
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        isGetting: false,
        countries: action.payload,
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };
    case 'SET_COMMUNITIES':
      return {
        ...state,
        communities: action.payload,
      };
    case 'SET_COMMUNITY':
      return {
        ...state,
        community: action.payload,
      };
    case 'SET_CHILDREN':
      return {
        ...state,
        children: action.payload,
      };
    default:
      return state;
  }
};
