// This object initializes the child nutrition records
export const initialState = {
  hasData: false,
  serverData: [],
  countries: [],
  country: '',
  communities: [],
  community: '',
  children: [],
  child: {},
  isGetting: false,
  error: '',
};

// export const initialState = {
//   countries: ['Brazil', 'Bolivia', 'Cambodia', 'Ecuador'],
//   country: 'Brazil',
//   communities: ['Belem', 'Fortaleza', 'Manaus'],
//   community: 'Belem',
//   children: [
//     {
//       id: 1,
//       name: 'Jane Doe',
//       parentname: 'Mrs. Doe',
//       parentcontact: 'mrs.doe@gmail.com',Haha
//       dob: '09/28/2010',
//       gender: 'F',
//       screenings: [
//         {
//           date: '11/11/19',
//           weight: 13,
//           height: 72,
//         },
//         {
//           date: '11/11/18',
//           weight: 11,
//           height: 56,
//         },
//         {
//           date: '5/11/18',
//           weight: 10,
//           height: 44,
//         },
//         {
//           date: '11/11/17',
//           weight: 9,
//           height: 43,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Maria Martinez',
//       parentname: 'Mr. Martinez',
//       parentcontact: 'mr.martinez@gmail.com',
//       dob: '09/28/2010',
//       gender: 'F',
//       screenings: [
//         {
//           date: '11/11/19',
//           weight: 13,
//           height: 72,
//         },
//         {
//           date: '11/11/18',
//           weight: 11,
//           height: 56,
//         },
//         {
//           date: '5/11/18',
//           weight: 10,
//           height: 44,
//         },
//         {
//           date: '11/11/17',
//           weight: 9,
//           height: 43,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: 'John Smith',
//       parentname: 'Mrs. Smith',
//       parentcontact: 'mrs.smith@gmail.com',
//       dob: '09/28/2010',
//       gender: 'M',
//       screenings: [
//         {
//           date: '11/11/19',
//           weight: 13,
//           height: 72,
//         },
//         {
//           date: '11/11/18',
//           weight: 11,
//           height: 56,
//         },
//         {
//           date: '5/11/18',
//           weight: 10,
//           height: 44,
//         },
//         {
//           date: '11/11/17',
//           weight: 9,
//           height: 43,
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: 'Joe Chan',
//       parentname: 'Mrs. Chan',
//       parentcontact: 'mrs.chan@gmail.com',
//       dob: '09/28/2010',
//       gender: 'M',
//       screenings: [
//         {
//           date: '11/11/19',
//           weight: 13,
//           height: 72,
//         },
//         {
//           date: '11/11/18',
//           weight: 11,
//           height: 56,
//         },
//         {
//           date: '5/11/18',
//           weight: 10,
//           height: 44,
//         },
//         {
//           date: '11/11/17',
//           weight: 9,
//           height: 43,
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: 'Mike Moo',
//       parentname: 'Mr. Moo',
//       parentcontact: 'mr.moo@gmail.com',
//       dob: '09/28/2010',
//       gender: 'M',
//       screenings: [
//         {
//           date: '11/11/19',
//           weight: 13,
//           height: 72,
//         },
//         {
//           date: '11/11/18',
//           weight: 11,
//           height: 56,
//         },
//         {
//           date: '5/11/18',
//           weight: 10,
//           height: 44,
//         },
//         {
//           date: '11/11/17',
//           weight: 9,
//           height: 43,
//         },
//       ],
//     },
//   ],
//   child: {
//     id: 6,
//     name: 'Initial Child',
//     parentname: 'Mrs. Doe',
//     parentcontact: 'mrs.doe@gmail.com',
//     dob: '09/28/2010',
//     gender: 'F',
//     screenings: [
//       {
//         date: '11/11/19',
//         weight: 13,
//         height: 72,
//       },
//       {
//         date: '11/11/18',
//         weight: 11,
//         height: 56,
//       },
//       {
//         date: '5/11/18',
//         weight: 10,
//         height: 44,
//       },
//       {
//         date: '11/11/17',
//         weight: 9,
//         height: 43,
//       },
//     ],
//   },
//   isGetting: false,
//   error: '',
// };

// This reducer handles dispatches to get data from the server and to update global child nutrition records stored in state
export const dataReducer = (state = initialState, action) => {
  console.log(action);
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
        hasData: true,
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
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
    case 'ADD_COUNTRY':
      return {
        ...state,
        countries: [...state.countries, { country: action.payload }],
      };
    case 'ADD_COMMUNITY':
      return {
        ...state,
        communities: [...state.communities, { community: action.payload }],
      };
    case 'RESET_DATA':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
