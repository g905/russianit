import { createStore, applyMiddleware } from "redux";
import elementsList from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  elementsList,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
