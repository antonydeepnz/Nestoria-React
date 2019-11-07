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

const initialRoutes = [
  {
    path: "/listings",
    component: Listings,
    text: "Search Properties",
    selected: true
  },
  {
    path: "/favorites",
    component: Favorites,
    text: "Booked to favorites",
    selected: false
  },
  {
    path: "/about",
    component: About,
    text: "About",
    selected: false
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
    </Router>
  );
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Menu;