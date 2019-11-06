import { handleActions } from 'redux-actions';

import { saveToFavorite, deleteFromFavorite } from '../actions/favoritesActions'
import { loadState } from '../../src/LSfuncs'

console.log(loadState());

const initialState = loadState() === undefined? []: loadState();

const favorites =  handleActions(
  {
    [saveToFavorite]: (state,{payload}) => ({...state, payload}),
    [deleteFromFavorite]: (state,{payload}) => ({...state,payload})
  },  
  initialState
);

export default favorites;

