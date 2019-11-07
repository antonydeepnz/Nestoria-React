import { combineReducers } from 'redux'

import listings from './listings'
import query from './query'
import favorites from './favorites'

const reducer = combineReducers({
  listings, query, favorites
})

export default reducer;
