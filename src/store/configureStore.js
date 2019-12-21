import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchProblems } from "../sagas/problemsSaga";

import rootReducer from "../reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware();

var store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchProblems);

export default store;
