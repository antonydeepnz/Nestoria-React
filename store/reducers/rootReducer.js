import { combineReducers } from 'redux'

import { listings } from './listings'
import query from './query'
import favorites from './favorites'

export default combineReducers({
  listings, query, favorites
})
