import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import problemsReducer from "../reducer/problemsReducer";

var store = createStore(problemsReducer);

export default store;
