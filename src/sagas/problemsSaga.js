import { put, takeEvery, call } from "redux-saga/effects";
import ProblemTypes from "../types/problemsTypes";
import Tabletop from "tabletop";
import { setProblems } from "../actions/problemsAction";

function fetchProblemsPromise(key) {
  return new Promise(resolve => {
    Tabletop.init({
      key: key,
      callback: googleData => {
        resolve(googleData);
      },
      simpleSheet: true
    });
  });
}

function* fetchProblems(action) {
  console.log("Fetching Problems");
  // Tabletop.init({
  //   key: action.key,
  //   callback: googleData => {
  //     console.log(googleData);
  //   },
  //   simpleSheet: true
  // });

  // Tabletop.init({
  //   key: action.key,
  //   callback: yield function*(googleData) {
  //     console.log(googleData);
  //     yield put(setProblems(googleData));
  //   },
  //   simpleSheet: true
  // });

  const data = yield call(fetchProblemsPromise, [action.key]);
  yield put(setProblems(data));
}

export function* watchFetchProblems() {
  console.log("Watching for fetch problems");
  yield takeEvery(ProblemTypes.FETCH_PROBLEMS, fetchProblems);
}
