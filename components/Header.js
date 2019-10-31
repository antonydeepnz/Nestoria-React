import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import { Search } from './Search'
import { Navigation } from './Navigation'

export const Header = (props) => {
  return(
    <div className='header'>
      <img src='https://resources.nestimg.com/nestoria/img/nestoria_blue_200-min.png'/>
      <Search onSearch={props.onSearch} />
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}