import SC from 'soundcloud'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream/index';
import { CLIENT_ID, REDIRECT_URI} from './constants/auth'

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const tracks = [
  {
    title: "Some Track"
  },
  {
    title: "Some Other Track"
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();