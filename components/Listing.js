import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import '../styles/listing.css'
import SaveToFavorites from './SaveToFavorites'
import { haveSaved } from '../src/helpFuncs'
import ListingExtended from './ListingExtended'

export const Listing = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className='listing-item'>
        <img src={props.imgSrc} />
        <h4>{props.title}</h4>
        <p>{props.listing_type === 'rent'? 
            `${props.price} ${props.price_type}`:
            `Buy for ${props.price} ${props.price_type}`}</p>
        <Link className='listing-getmore-btn'
              to={`${url}`} 
                    >More Info</Link>
        <SaveToFavorites data={props.data} checked={props.checked}/>
      </div>
      <Switch>
        <Route path={`${path}/:topicId`}>
          <ListingExtended />
        </Route>
      </Switch>
    </>
  );
}