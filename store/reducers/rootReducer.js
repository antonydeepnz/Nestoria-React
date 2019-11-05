import { combineReducers } from 'redux'

import listings from './listings'
import query from './query'
//import favorites from './favorites'
import router from './router'

export default combineReducers({
  listings, query, router
})
