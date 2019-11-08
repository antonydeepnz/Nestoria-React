import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import {
  useParams,
} from "react-router-dom";

import '../styles/extended.css'

const ListingExtended = (props) => {
  let { id } = useParams();
  console.log(props)
  return(
    <div className="extended">
      {id}
      //<img src={props.img_src} />
    </div>
  );
}

export default ListingExtended;