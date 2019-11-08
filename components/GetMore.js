import React from 'react'

import { getListings } from '../store/actions/listingsActions'

const GetMore = ({func}) => {
  return (
    <button onClick={func}>Get More</button>
  )
}

export default GetMore;