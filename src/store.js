import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const albums = (state =[], action) => {
  switch(action.type) {
    case 'GET_ALBUMS_SUCCESS':
      return action.albums;

  default:
    return state    
  }
}

const reducers = combineReducers ({
  albums: albums
});
const middleware = [thunk]; 

export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);


