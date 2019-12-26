import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas/index";
import rootReducer from "../reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware();

var store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
