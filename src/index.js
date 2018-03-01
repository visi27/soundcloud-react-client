/* eslint-disable no-unused-vars */
import SC from 'soundcloud'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import App from './components/App'
import Callback from './components/Callback'
import Stream from './components/Stream/index'
import { CLIENT_ID, REDIRECT_URI } from './constants/auth'
import DevTools from './containers/DevTools'

SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI})

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream}/>
        <Route path="/" component={Stream}/>
        <Route path="/callback" component={Callback}/>
      </Route>
    </Router>
    <DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
