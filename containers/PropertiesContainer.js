import React, { Component } from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Listings from './Listings'
import ListingExtended from '../components/ListingExtended'

const PropertiesContainer = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Listings}></Route>
      <Route path={`${path}/:id`} component={ListingExtended}></Route>
    </Switch>
  );
}
  
export default PropertiesContainer  