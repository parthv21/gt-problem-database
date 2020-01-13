import { all } from "redux-saga/effects";
import { watchFetchProblems } from "./problemsSaga";

function* rootSaga() {
  yield all([watchFetchProblems()]);
}

export default rootSaga;
