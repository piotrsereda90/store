import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux';
import{createStore ,applyMiddleware,compose} from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import reducers from './rootReducers';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./api/mocks/browser')
  worker.start()
}
const persistConfig = {
  key: "root",
  storage
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware =[thunk];
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
  // reducers, applyMiddleware(thunk)
  );
  // const persistor = persistStore(store);
  console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
