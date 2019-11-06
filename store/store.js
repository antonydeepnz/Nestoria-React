import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/rootReducer'
import { saveState } from '../src/LSfuncs'

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(
    store.getState().favorites,
  );
});

export default store;