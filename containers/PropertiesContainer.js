import React from 'react';
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
      <Route path={`${path}/:id`} component={(props) => {return <ListingExtended {...props}/>}}/>
    </Switch>
  );
}
  
export default PropertiesContainer  