import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/saveToFavorites.css'
import { saveToFavorite, deleteFromFavorite } from '../store/actions/favoritesActions'

const SaveToFavorites = (props) => {
  const [checked, setChecked] = useState(props.checked);
   
  const handleChange = (data) => {
    !checked? props.onSave(data): props.onDelete(data);
    setChecked(!checked);
  }
  return(
    <div className="listing-tofavorite">
      <input className="tofavorite-checkbox" type="checkbox" checked={checked}/>
      <label className="tofavorite-label" onClick={() => {handleChange(props.data)}}></label>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (data) => {
      dispatch(saveToFavorite(data))
    },
    onDelete: (data) => {
      dispatch(deleteFromFavorite(data));
      //event.target.parentNode.style.display = 'none';
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveToFavorites)
