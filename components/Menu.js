import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Listings from '../containers/Listings'
import Favorites from '../containers/Favorites'
import About from './About'
import Navigation from './Navigation'
import ListingExtended from './ListingExtended'


const initialRoutes = [
  {
    path: "/listings",
    component: Listings,
    text: "Search Properties",
    routes: [
      {
        path: '/listings/:id',
        component: ListingExtended
      }
    ]
  },
  {
    path: "/favorites",
    component: Favorites,
    text: "Booked to favorites",
  },
  {
    path: "/about",
    component: About,
    text: "About",
  },
  /*{
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }*/
];

const Menu = () => {
  return (
    <Router> 
      {initialRoutes.map((item,i) => {
        return <Navigation key={i} path={item.path} text={item.text} />
      })}      
      <Switch>
          {initialRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
      </Switch>
    </Router>
  );
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Menu;