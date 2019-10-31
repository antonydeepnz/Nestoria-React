import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

import '../styles/extended.css'

export const ListingExtended = (props) => {
  return(
    <div className="extended">
      <img src={props.img_src} />
      
    </div>
  );
}