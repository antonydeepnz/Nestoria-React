import { handleActions } from 'redux-actions';

import { getListingsRequest, getListingsFulfiled, getListingsRejected, getListingsMore } from '../actions/listingsActions'

const initialState = {
    listings: [],
    loading: false,
    error: ''
} 

const listings = handleActions(
  {
    [getListingsRequest]: (state) => ({...state, loading: true}),
    [getListingsFulfiled]: (state,{payload}) => ({...state, listings: payload, loading: false}),
    [getListingsRejected]: (state,{payload}) => ({...state, error: payload, loading: false}),
    [getListingsMore]: (state,{payload}) => ({...state})
  },  
  initialState
);

export default listings;