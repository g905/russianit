import "polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store";
import { addEl, removeElement, fetchStatus } from "./js/actions";
import App from "./js/components/App";
import "./index.css";

console.log(store.getState());

//const unsubscribe = store.subscribe(() => console.log(store.getState()));

//store.dispatch(addEl({ id: 1, title: "test" }));
//store.dispatch(addElement({ id: 2, title: "test2" }));
//store.dispatch(addElement({ id: 3, title: "test3" }));
//console.log(store.getState());
//store.dispatch(removeElement({ id: 1, title: "test" }));
//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

window.store = store;
