import React from 'react';
import document from 'global/document';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from './store';
import App from './app';
import SelectorComponent from './selector'



const Root = () => (
  <Provider store={store}>
    <SelectorComponent />
    <App />
  </Provider>
);

render(<Root />, document.body.appendChild(document.createElement('div')));
