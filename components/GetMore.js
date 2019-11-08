import React from 'react'

import { getListings } from '../store/actions/listingsActions'

const GetMore = ({town, page}) => {
  handleClick = () => {
    getListings(town,page+1);
  }
  return (
    <button onClick={handleClick}>Get More</button>
  )
}

export default GetMore;