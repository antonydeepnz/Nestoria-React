import React, { Component } from 'react'
import { connect } from 'react-redux'

/////STYLES IMPORT
import '../styles/App.css'

/////COMPONENTS IMPORT
import { Header } from './Header'
import Listings from './Listings'

/////functions IMPORT
import { getListings } from '../store/actions/listingsActions'

class App extends Component {
  constructor() {
    super();
  }
/*
  loadListings = () => {
    return !this.props.loading? <Loader />:
       this.props.listings.map((item,index) => {
        return <Listing key={index} 
                  imgSrc={item.img_url}
                  title={item.title}
                  price={item.price_formatted} />
      })
  }
 */ 

  handleSearch = (town) => {
    this.props.onQuery(town);
    this.props.onGetListings(town);
  }

  render() {
    return (
      <div className='app'>
        <Header onSearch={this.handleSearch} />
        <div className='list-of-listings'>
          <Listings />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    listings: state.listings
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

export default connect(
  state => ({
    //listings: state.listings.listings.payload,
    //loading: state.listings.loading,
    //town: state.listings.town
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
