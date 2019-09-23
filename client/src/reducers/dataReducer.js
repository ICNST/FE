// This object initializes the child nutrition records
export const initialState = {
  countries: ['Brazil', 'Bolivia', 'Cambodia', 'Ecuador'],
  country: '',
  communities: [],
  community: '',
  children: [],
  child: '',
  isGetting: false,
  error: '',
};

// This reducer handles dispatches to get data from the server and to update global child nutrition records stored in state
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
