import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {apiReducer} from './api';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  apiReducer,
  photoReducer,
  homeReducer,
});

export default reducer;
