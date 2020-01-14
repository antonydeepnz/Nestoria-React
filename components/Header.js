import React, { Component } from 'react'

import Menu from './Menu'
//import '../styles/header.css'

export const Header = (props) => {
  return(
    <div className='header'>
      <img src='https://resources.nestimg.com/nestoria/img/nestoria_blue_200-min.png'/>
      <Menu />    
    </div>
  );
}
