import React from 'react'
import { connect } from 'react-redux'
import { YMaps, Map } from 'react-yandex-maps'
import {
  useParams,
} from "react-router-dom";

import '../styles/extended.css'

const ListingExtended = (props) => {
  let { id } = useParams();
  const data = props.listings.filter(item => item.title === id)[0];
  return(
    <div className="extended">
      <img src={data.img_url} />    
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings, 
  }
}

export default connect(mapStateToProps)(ListingExtended)
