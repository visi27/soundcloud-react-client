import React from "react";
import { expect } from "chai";
import jsdom from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;

const win = document.defaultView;

global.document = document;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;