import { handleActions } from 'redux-actions';

import { saveToFavorites, deleteFromFavorites } from '../actions/favoritesActions'
import { loadState } from '../../src/LSfuncs'

const favorites =  handleActions(
  {
    [saveToFavorites]: (state,{payload}) = ({...state,payload}),
    [deleteFromFavorites]: (state,{payload}) = ({...state,payload})
  },  
  loadState
);

export default favorites;

