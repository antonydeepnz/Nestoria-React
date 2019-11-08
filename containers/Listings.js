import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { Search } from '../components/Search'
import { Listing } from '../components/Listing'
import { Loader } from '../components/Loader'
import { haveSaved } from '../src/helpFuncs'
import { getListings } from '../store/actions/listingsActions'
import ListingExtended from '../components/ListingExtended'

const Listings = (props) => {
  let { path, url } = useRouteMatch();
  const handleSearch = (town) => {
   // this.props.onQuery(town);
    props.onGetListings(town);
  }
  return (
    <>
      <Search onSearch={handleSearch}/>
      <div className='list-of-listings'>
        {props.listingsState.loading? <Loader />:
          props.listingsState.listings.map((item,index) => {
            return <Listing key={index} 
                  imgSrc={item.img_url}
                  title={item.title}
                  price={item.price_formatted}
                  price_type={item.price_type}
                  data={item} 
                  checked={haveSaved(props.favorites,item)}/>
        })}
      </div>
      <Switch>
        <Route path={`${path}/:topicId`}>
          <ListingExtended />
        </Route>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listingsState: state.listings,
    favorites: state.favorites,
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    onGetListings: (town) => {
      dispatch(getListings(town));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listings)