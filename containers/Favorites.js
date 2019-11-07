import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Listing } from '../components/Listing'
import { haveSaved } from '../src/helpFuncs'

const Favorites = (props) => {
  return (
    <>
      {props.favorites.map((item,index) => {
        return <Listing key={index} 
              imgSrc={item.img_url}
              title={item.title}
              price={item.price_formatted}
              price_type={item.price_type}
              data={item} 
              checked={haveSaved(props.favorites,item)}/>
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  }
}

export default connect(mapStateToProps)(Favorites)