import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/SaveToFavorites.css'
import { saveToFavorite, deleteFromFavorite } from '../store/actions/favoritesActions'

const SaveToFavorites = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const handleChange = (data,event) => {
    !checked? props.onSave(data): props.onDelete(data,event);
    setChecked(!checked);
  }
  return(
    <div className="listing-tofavorite">
      <input className="tofavorite-checkbox" type="checkbox" checked={checked}/>
      <label className="tofavorite-label" onClick={(event) => {handleChange(props.data,event)}}></label>
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
    onDelete: (data,event) => {
      dispatch(deleteFromFavorite(data));
      event.target.parentNode.style.display = 'none';
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveToFavorites)
