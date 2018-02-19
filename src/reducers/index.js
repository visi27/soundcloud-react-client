import { combineReducers } from 'redux'
import track from './track'
import auth from './auth'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  track,
  auth,
  routing: routerReducer,
})