import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import { MainContainer } from "./page/MainContainer";

import "antd/dist/antd.css";
import "./style.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
