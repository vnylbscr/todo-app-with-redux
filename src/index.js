import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index"
import App from './App';
// redux dev tools
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducer, enhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);