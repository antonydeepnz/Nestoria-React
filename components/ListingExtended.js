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
  console.log(data);
  return(
    <div className="extended">
      <img src={data.img_u} />
    </div>
  );
}

// export default ListingExtended;

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings, 
  }
}

export default connect(mapStateToProps)(ListingExtended)