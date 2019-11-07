import { handleActions } from 'redux-actions';

import { saveToFavorite, deleteFromFavorite } from '../actions/favoritesActions'
import { loadState } from '../../src/LSfuncs'

const data = loadState('favorites')
const initialState = !data? []: data;

const favorites =  handleActions(
  {
    [saveToFavorite]: (state,{payload}) => [...state,payload],
    [deleteFromFavorite]: 
      (state,{payload}) => {return state.filter(item => 
        item !== payload
      )
  }},  
  initialState
);

export default favorites;

