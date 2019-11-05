import axios from 'axios';

import { getListingsRequest, getListingsFulfiled, getListingsRejected } from '../reducers/listings'


export const getListings = (town) => {
  return dispatch => {
    dispatch(getListingsRequest(true));
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&place_name=${town}`)
    .then(res => {
      dispatch(getListingsFulfiled(res.data.response.listings));
    })
    .catch(err => dispatch(getListingsRejected(err)));
  }
}