import React, { Component } from 'react'
import { connect } from 'react-redux'

/////STYLES IMPORT
import '../styles/App.css'

/////COMPONENTS IMPORT
import { Header } from './Header'
import Listings from '../containers/Listings'

/////functions IMPORT
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
          <Listings />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    listings: state.listings
  }
};

const mapDispatchtoProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
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
