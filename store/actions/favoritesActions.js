import { createActions } from 'redux-actions';

export const { saveToFavorite, deleteFromFavorite } = createActions(
  "SAVE_TO_FAVORITE",
  "DELETE_FROM_FAVORITE"
)  