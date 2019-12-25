import { put, takeEvery, call } from "redux-saga/effects";
import ProblemTypes from "../types/problemsTypes";
import Tabletop from "tabletop";
import { setProblems } from "../actions/problemsAction";
import attributes from "../constants/attributes";

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
  const data = yield call(fetchProblemsPromise, [action.key]);
  var problems = {};

  for (var i = 0; i < data.length; i++) {
    problems[data[i][attributes.uid]] = data[i];
  }

  yield put(setProblems(problems));
}

export function* watchFetchProblems() {
  yield takeEvery(ProblemTypes.FETCH_PROBLEMS, fetchProblems);
}
