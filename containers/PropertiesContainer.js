import React, { Component } from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Listings from './Listings'
import ListingExtended from '../components/ListingExtended'

const PropertiesContainer = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Listings}/>
      <Route path={`${path}/:id`} component={ListingExtended}/>
    </Switch>
  );
}
  
export default PropertiesContainer  