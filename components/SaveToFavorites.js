import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/SaveToFavorites.css'
import { saveToFavorite, deleteFromFavorite } from '../store/actions/favoritesActions'

const SaveToFavorites = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const save = (data) => {
    props.onSave(data)
    setChecked(!checked);
  }
  return(
    <div className="listing-tofavorite">
      <input className="tofavorite-checkbox" type="checkbox" checked={checked} defaultChecked={false}/>
      <label className="tofavorite-label" onClick={() => {save(props.data)}}></label>
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

//export default SaveToFavorites;

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (data) => {
      dispatch(saveToFavorite(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveToFavorites)
