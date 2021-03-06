import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/index.scss";

// import redux elements

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
