import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/index'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const enhancer = applyMiddleware(thunk, router, logger);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}