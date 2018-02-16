import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/class/Stream'

const tracks = [
  {
    title: "Some Track"
  },
  {
    title: "Some Other Track"
  }
]

ReactDOM.render(
  <Stream tracks={tracks}/>,
  document.getElementById('app')
);

module.hot.accept();