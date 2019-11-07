import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Listing } from '../components/Listing'
import { Loader } from '../components/Loader'
import { haveSaved } from '../src/helpFuncs'

const Listings = (props) => {
   //console.log(haveSaved(props.favorites,props.item))
  return (
    <>
      {props.listingsState.loading? <Loader />:
        props.listingsState.listings.map((item,index) => {
          return <Listing key={index} 
                imgSrc={item.img_url}
                title={item.title}
                price={item.price_formatted}
                data={item} 
                checked={haveSaved(props.favorites,item)}/>
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listingsState: state.listings,
    favorites: state.favorites,
  }
}

export default connect(mapStateToProps)(Listings)