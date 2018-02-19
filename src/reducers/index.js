import { combineReducers } from 'redux'
import track from './track'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  track,
  routing: routerReducer
})