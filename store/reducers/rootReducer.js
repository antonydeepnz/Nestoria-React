import { combineReducers } from 'redux'

import listings from './listings'
import favorites from './favorites'

const reducer = combineReducers({
  listings, favorites
})

export default reducer;
