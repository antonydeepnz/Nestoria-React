import React from 'react'
import {
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
];

const Menu = () => {
  return (
    <> 
      {initialRoutes.map((item,i) => {
        return <Navigation key={i} path={item.path} text={item.text} />
      })}      
      <Switch>
          {initialRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
      </Switch>
    </>
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

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}
