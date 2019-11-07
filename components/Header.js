import React, { Component } from 'react'

import { Search } from './Search'
import Menu from './Menu'

export const Header = (props) => {
  return(
    <div className='header'>
      <img src='https://resources.nestimg.com/nestoria/img/nestoria_blue_200-min.png'/>
      <Menu />
      
      
    </div>
  );
}

//<Search onSearch={props.onSearch} />