import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../styles/SaveToFavorites.css'
import { saveToFavorite, deleteFromFavorite } from '../store/actions/favoritesActions'

const SaveToFavorites = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const change = (data) => {
    !checked? props.onSave(data): props.onDelete(data);
    console.log(localStorage)
    setChecked(!checked);
  }
  return(
    <div className="listing-tofavorite">
      <input className="tofavorite-checkbox" type="checkbox" checked={checked}/>
      <label className="tofavorite-label" onClick={() => {change(props.data)}}></label>
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
      console.log('dsgdsf')
      dispatch(deleteFromFavorite(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveToFavorites)
