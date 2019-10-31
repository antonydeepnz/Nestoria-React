import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/navigation.css'

export const Navigation = () => {
  return(
    <>
      <Link to={`/listings`}>Search Properties</Link>
      <Link to={`/favorites`}>Booked to favorites</Link>
      <Link to={`/about`}>About</Link>
    </>
  );
}

