import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducers';
import { createStore } from 'redux';
import { App } from './components';

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render();

const store = createStore(reducer);
store.subscribe(render);
