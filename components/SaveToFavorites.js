import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/SaveToFavorites.css'

const SaveToFavorites = () => {
  const [checked, setChecked] = useState(false);
  return(
    <div className="listing-tofavorite">
      <input className="tofavorite-checkbox" type="checkbox" />
      <label className="tofavorite-label" onClick={() => {console.log('fdgvfg');setChecked(!checked)}}></label>
    </div>
  );
}

  //     checkbox.checked = hasValue(this.settings.lister_url)? true: false;
      
  //     toFavorite.addEventListener('click', () => {
  //       if(!hasValue(this.settings.lister_url)){
  //         savetoLS(this.settings);
  //         checkbox.checked = true;
  //       } else {
  //         removeFromLS(this.settings);
  //         checkbox.checked = false;
  //       }
  //       console.log(checkbox.checked);  
  //     });

export default SaveToFavorites;
/*
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect()(SaveToFavorites)
*/