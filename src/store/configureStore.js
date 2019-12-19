import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchProblems } from "../sagas/problemsSaga";

import problemsReducer from "../reducer/problemsReducer";

const sagaMiddleware = createSagaMiddleware();

var store = createStore(problemsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchProblems);

export default store;
