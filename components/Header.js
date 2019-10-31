import React, { Component } from 'react'
import { Search } from './Search'

export const Header = (props) => {
  return(
    <div className='header'>
      <img src='https://resources.nestimg.com/nestoria/img/nestoria_blue_200-min.png'/>
      <Search onSearch={props.onSearch} />
    </div>
  );
}