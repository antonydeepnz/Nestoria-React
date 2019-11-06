import { createActions } from 'redux-actions';

export const { saveToFavorites, deleteFromFavorites } = createActions(
  "SAVE_TO_FAVORITES",
  "DELETE_FROM_FAVORITES"
)  