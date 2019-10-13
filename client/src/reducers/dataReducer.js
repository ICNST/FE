// This object initializes the child nutrition records
export const initialState = {
  hasData: false,
  serverData: [],
  childrenData: [],
  countries: [],
  country: '',
  communities: [],
  community: '',
  children: [],
  child: {},
  screenings: [],
  isGetting: false,
  error: '',
};

// This reducer handles dispatches to get data from the server and to update global child nutrition records stored in state
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return {
        ...initialState,
      };
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
        serverData: action.payload,
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'IMPORT_DATA':
      return {
        ...state,
        childrenData: action.payload,
        hasData: true,
      };
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
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
    case 'SET_CHILD':
      return {
        ...state,
        child: action.payload,
      };
    case 'SET_SCREENINGS':
      return {
        ...state,
        screenings: action.payload,
      };
    case 'ADD_COUNTRY':
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    case 'DELETE_COUNTRY':
      return {
        ...state,
        countries: state.countries.filter(el => el !== action.payload),
        childrenData: state.childrenData.filter(
          obj => obj.country !== action.payload,
        ),
      };
    case 'ADD_COMMUNITY':
      return {
        ...state,
        communities: [...state.communities, action.payload],
      };
    case 'DELETE_COMMUNITY':
      return {
        ...state,
        communities: state.communities.filter(el => el !== action.payload),
        childrenData: state.childrenData.filter(
          obj => obj.community !== action.payload,
        ),
      };
    case 'ADD_CHILD':
      return {
        ...state,
        children: [...state.children, action.payload],
        childrenData: [...state.childrenData, action.payload],
      };
    case 'ADD_RECORD':
      return {
        ...state,
        child: {
          ...state.child,
          screenings: [...state.child.screenings, action.payload],
        },
        childrenData: state.childrenData.map(obj => {
          if (obj.id === Number(action.id)) {
            obj.screenings = [...obj.screenings, action.payload];
          }
          return obj;
        }),
      };
    case 'RESET_DATA':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
