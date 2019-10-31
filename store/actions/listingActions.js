import axios from 'axios';

import { requestData, requestDataFulfilled, requestDataRejected } from '../reducers/listings'


export const getListings = (town) => {
  return dispatch => {
    dispatch(requestData(true));
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&place_name=${town}`)
    .then(res => {
      dispatch(requestDataFulfilled(res.data.response.listings));
    })
    .catch(err => dispatch(requestDataRejected(err)));
  }
}