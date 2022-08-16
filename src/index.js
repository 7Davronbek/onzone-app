import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/swiper-navigation.css";
import "./sass/catalog.scss";
import "./sass/product.scss";
import "./sass/secondary.scss";
import "./sass/third.scss";
import "./sass/main.scss";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
