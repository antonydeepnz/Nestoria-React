import React from 'react'
import { connect } from 'react-redux'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
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
        <Map defaultState={{ center: [data.latitude, data.longitude], zoom: 18, width:'450px', height:'450px' }} >
          <Placemark geometry={[data.latitude, data.longitude]}
              properties={{iconCaption:data.title}}/>
        </Map>
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
