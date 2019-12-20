import { put, takeEvery, call } from "redux-saga/effects";
import ProblemTypes from "../types/problemsTypes";
import Tabletop from "tabletop";
import { setProblems } from "../actions/problemsAction";

function fetchProblemsPromise(key) {
  return new Promise(resolve => {
    Tabletop.init({
      key: key,
      callback: sheet => {
        resolve(sheet);
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
  var problems = {};

  for (var i = 0; i < data.length; i++) {
    problems[data[i]["uid"]] = data[i];
  }

  console.log(problems);

  yield put(setProblems(problems));
}

export function* watchFetchProblems() {
  console.log("Watching for fetch problems");
  yield takeEvery(ProblemTypes.FETCH_PROBLEMS, fetchProblems);
}
