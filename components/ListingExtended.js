import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import {
  useParams,
} from "react-router-dom";

import '../styles/extended.css'

const ListingExtended = (props) => {
  let { topicId } = useParams();
  return(
    <div className="extended">
      {topicId}
      //<img src={props.img_src} />
    </div>
  );
}

export default ListingExtended;