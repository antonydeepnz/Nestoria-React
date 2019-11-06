import { handleActions } from 'redux-actions';

import { saveToFavorite, deleteFromFavorite } from '../actions/favoritesActions'
import { loadState } from '../../src/LSfuncs'

const initialState = [];

const favorites =  handleActions(
  {
    [saveToFavorite]: (state,{payload}) => ({...state,payload}),
    [deleteFromFavorite]: (state,{payload}) => ({...state,payload})
  },  
  loadState()
);

export default favorites;

