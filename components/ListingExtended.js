import React from 'react'
import { connect } from 'react-redux'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import {
  useParams,
} from "react-router-dom";

import '../styles/extended.css'

const MyMap = (props) => {
  return (
    <YMaps>
      <Map width='450px' height='450px' defaultState={{ center: [props.latitude, props.longitude], zoom: 18}} >
        <Placemark geometry={[props.latitude, props.longitude]}
            properties={{iconCaption:props.title}}/>
      </Map>
    </YMaps>
  );
}

const ListingExtended = (props) => {
  let { id } = useParams();
  const data = props.listings.filter(item => item.title === id)[0];

  return(
    <div className="extended">
      <img src={data.img_url} />    
      <h4>{data.title}</h4>
      <p>{`${data.price} ${data.price_type}`}</p>
      <ul>
        {data.keywords.map(item => {return <li>{item}</li>})}
      </ul>
      <MyMap latitude={data.latitude} longitude={data.longitude} title={data.title}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings, 
  }
}

export default connect(mapStateToProps)(ListingExtended)
