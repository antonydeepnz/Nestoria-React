import React, { useState } from 'react'
import {
  Link,
  useRouteMatch
} from "react-router-dom";

import '../styles/listing.css'
import SaveToFavorites from './SaveToFavorites'
import { haveSaved } from '../src/helpFuncs'
import ListingExtended from './ListingExtended'

export const Listing = (props) => {
  let { url, path } = useRouteMatch();
  const visible = true;
  const pathTo = props.title;
  const listing = 
    <div className='listing-item'>
      <img src={props.imgSrc}/>
      <h4>{props.title}</h4>
      <p>{`${props.price} ${props.price_type}`}</p>
      <Link className='listing-getmore-btn'
            to={`${url}/${pathTo}`}>More Info</Link>
      <SaveToFavorites data={props.data} checked={props.checked}/>
    </div>
  return (
    <>
      {visible? listing: null}
    </>
  );
}