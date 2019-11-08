import React, { Component } from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps'

import { Search } from '../components/Search'
import { Listing } from '../components/Listing'
import { Loader } from '../components/Loader'
import { haveSaved } from '../src/helpFuncs'
import { getListings } from '../store/actions/listingsActions'
import ListingExtended from '../components/ListingExtended'
import '../styles/map.css'

const MyMap = (props) => {
  return (
    <YMaps>
      <Map width='450px' height='450px' defaultState={{ center: props.location, zoom: 13}} >
        {props.data.map(item => {
            return <Placemark geometry={[item.latitude, item.longitude]}
              properties={{iconCaption:item.title}}/> 
          })
        } 
      </Map>
    </YMaps>
  );
}

const Listings = (props) => {

  const handleSearch = (town) => {
   // this.props.onQuery(town);
    props.onGetListings(town);
  }

  const elements = props.listings.listings.map((item,index) => {
            return <Listing key={index} 
                  imgSrc={item.img_url}
                  title={item.title}
                  price={item.price_formatted}
                  price_type={item.price_type}
                  data={item} 
                  checked={haveSaved(props.favorites,item)}/>
        })

  return (
    <>
      <Search onSearch={handleSearch}/> 
      <div className='list-of-listings'>
        {props.listings.loading? <Loader />:
          <>
            {elements} 
            <MyMap className='map' location={props.listings.location} data={props.listings.listings}/>
          </>
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
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