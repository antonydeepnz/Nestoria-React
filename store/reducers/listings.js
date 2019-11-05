import { createActions, handleActions } from 'redux-actions';

const initialState = () => {
  return {
    listings: [],
    loading: false,
    error: '',
    queryTown: 'london'
  }
} 

export const { getListingsRequest, getListingsFulfiled, getListingsRejected } = createActions(
  
    "GET_LISTINGS_REQUEST",
    'GET_LISTINGS_FULFILED',
    'GET_LISTINGS_REJECTED' 
) 


// export const requestData = (state, bool) => {
//     return {...state, loading: bool};
// }

// export const requestDataFulfilled = (data) => {
//     return {
//         type: "GET_LISTINGS_FULFILED",
//         payload: data,
//         loading: false,
//     };
// }

// export const requestDataRejected = (error) => {
//     return {
//         type: "GET_LISTINGS_REJECTED",
//         payload: error,
//         loading: false,
//     };
// }

// export function listings(state = initialState(), action){
//   switch (action.type){
//     // case "GET_LISTINGS": {
//     //   return {...state, loading: action.payload};
//     // }
//     case "GET_LISTINGS_FULFILED": {
//       return {...state, listings: action.payload, loading: action.loading};
//     }
//     case "GET_LISTINGS_REJECTED": {
//       return {...state, errorMessage: action.payload, loading: action.loading};
//     } 
//     default: 
//       return state
//   }
// }

export const listings = handleActions(
  {
    [getListingsRequest]: (state,bool) => ({...state, loading: bool}),
    [getListingsFulfiled]: (state,data) => ({...state, listings: data, loading: false}),
    [getListingsRejected]: (state,error) => ({...state, errorMessage: error, loading: false})
  },  
  initialState()
);