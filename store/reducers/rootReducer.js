import { combineReducers } from 'redux'

import listings from './listings'
import query from './query'
import favorites from './favorites'
import router from './router'

const reducer = combineReducers({
  listings, query, router, favorites
})

export default reducer;
