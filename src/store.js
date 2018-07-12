import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import albums from './reducers/albums';
import albumFormData from './reducers/albumFormData';



const reducers = combineReducers ({
  albums, 
  albumFormData
});
const middleware = [thunk]; 

export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);


