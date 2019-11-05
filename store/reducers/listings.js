import { createActions, handleActions } from 'redux-actions';

const initialState = {
    listings: [],
    loading: false,
    error: '',
    queryTown: 'london'
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

const listings = handleActions(
  {
    [getListingsRequest]: (state) => ({...state, loading: true}),
    [getListingsFulfiled]: (state,{payload}) => ({...state, listings: payload, loading: false}),
    [getListingsRejected]: (state,{payload}) => ({...state, error: payload, loading: false})
  },  
  initialState
);

export default listings;