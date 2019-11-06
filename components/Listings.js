import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Listing } from './Listing'
import { Loader } from './Loader'

const Listings = (props) => {
  return (
    <>
      {props.listingsState.loading? <Loader />:
        props.listingsState.listings.map((item,index) => {
          return <Listing key={index} 
                imgSrc={item.img_url}
                title={item.title}
                price={item.price_formatted}
                data={item.lister_url} />
      })}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listingsState: state.listings,
  }
}

export default connect(mapStateToProps)(Listings)