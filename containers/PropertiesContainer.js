import React, { Component } from 'react';
import {
  Switch,
  Route,
  withRouter,
  useRouteMatch
} from "react-router-dom";

import Listings from './Listings'
import ListingExtended from '../components/ListingExtended'

const PropertiesContainer = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Listings />
      </Route>
      <Route path={`${path}/:topicId`}>
        <ListingExtended />
      </Route>
    </Switch>
  );
}
  
export default PropertiesContainer  