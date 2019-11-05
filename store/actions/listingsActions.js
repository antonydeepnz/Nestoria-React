import axios from 'axios';
import { createActions } from 'redux-actions';

export const { getListingsRequest, getListingsFulfiled, getListingsRejected } = createActions(
  "GET_LISTINGS_REQUEST",
  'GET_LISTINGS_FULFILED',
  'GET_LISTINGS_REJECTED' 
) 

export const getListings = (town = "london") => {
  return dispatch => {
    dispatch(getListingsRequest());
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&place_name=${town}`)
    .then(res => {
      dispatch(getListingsFulfiled(res.data.response.listings));
    })
    .catch(err => dispatch(getListingsRejected(err)));
  }
}