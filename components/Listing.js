import React, { Component } from 'react'
import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import '../styles/listing.css'
import SaveToFavorites from './SaveToFavorites'
import { haveSaved } from '../src/helpFuncs'

export const Listing = (props) => {
  return (
    <div className='listing-item'>
      <img src={props.imgSrc} />
      <h4>{props.title}</h4>
      <p>{props.listing_type === 'rent'? 
          `${props.price} ${props.price_type}`:
          `Buy for ${props.price} ${props.price_type}`}</p>
      <a className='listing-getmore-btn'>More Info</a>
      <SaveToFavorites data={props.data} checked={props.checked}/>
    </div>
  );
}