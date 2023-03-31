import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {apiReducer} from './api';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  apiReducer,
  photoReducer,
});

export default reducer;
