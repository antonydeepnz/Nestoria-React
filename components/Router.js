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

const initialRoutes = [
  {
    path: "/listings",
    component: Listings,
    selected: true
  },
  {
    path: "/favorites",
    component: Favorites,
    selected: false
  },
  {
    path: "/about",
    component: About,
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

export default Router= () => {
  return (
    <Router>
      
    </Router>
  );
}