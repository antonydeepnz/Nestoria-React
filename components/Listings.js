import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios' 

/////STYLES IMPORT
import '../styles/App.css'

/////COMPONENTS IMPORT
import { Header } from './Header'
import { Listing } from './Listing'

/////ACTIONS IMPORT
import { getListings } from '../store/actions/listingsActions'

class App extends Component {
  constructor() {
    super();
  }

  handleSearch = (town) => {
    this.props.onQuery(town);
    this.props.onGetListings(town);
  }

  render() {
    return (
      <div className='app'>
        <Header onSearch={this.handleSearch} />
        <div className='list-of-listings'>
        {this.props.listings.map((item,index) => {
          return <Listing key={index} 
                    imgSrc={item.img_url}
                    title={item.title}
                    price={item.price_formatted}/>
        })}
        </div>
        <Map />
      </div>
    );
  }
}

export default connect(
  state => ({
    listings: state.listings.listings,
    town: state.listings.town
  }),
  dispatch => ({
    onGetListings: (town) => {
      dispatch(getListings(town));
    },
    onShowMore : () => {
      
    },
    onQuery: (town) => {
      dispatch({type: "MAKE_QUERY_STRING", payload: town})
    }
  })
)(App)
