import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/search.css'
import { getListings } from '../store/actions/listingsActions'

export const Search = (props) => {
  const [town, setTown] = useState('london');
  const transfer = () => {
    props.onSearch(town);
  }
  return (
    <div className="search">
      <input placeholder="Input city where to search" onChange={({target: {value}}) => {setTown(value)}} />
      <button onClick={transfer}>Search</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    
  };
};
/*
const mapDispatchtoProps = (dispatch) => {
  return {
    onGetListings: (town) => {dispatch(getListings(town))}
  }
}
*/
export default connect(
  state => ({
  }),
  dispatch => ({
    onGetListings: (town) => {
      dispatch(getListings(town));
    }
  })
)(Search)

