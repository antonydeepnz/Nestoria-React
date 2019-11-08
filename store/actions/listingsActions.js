import axios from 'axios';
import { createActions } from 'redux-actions';

export const { getListingsRequest, getListingsFulfiled, getListingsRejected, getListingsMore } = createActions(
  "GET_LISTINGS_REQUEST",
  'GET_LISTINGS_FULFILED',
  'GET_LISTINGS_REJECTED',
  'GET_LISTINGS_MORE'
) 

export const getListings = (town = "london") => {
  return dispatch => {
    dispatch(getListingsRequest());
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&place_name=${town}`)
    .then(res => {
      console.log(res.data.response);
      const data = res.data.response;
      const listings = data.listings;
      const { center_lat, center_long }  = data.locations[0];
      const result = {listings,location:[center_lat, center_long]}
      console.log(result)
      dispatch(getListingsFulfiled(result));
    })
    .catch(err => dispatch(getListingsRejected(err)));
  }
}