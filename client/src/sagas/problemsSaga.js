import { put, takeEvery, call } from "redux-saga/effects";
import ProblemTypes from "../types/problemsTypes";
import { setProblems } from "../actions/problemsAction";
import attributes, { publishedStates } from "../constants/attributes";

function* fetchProblems() {
  const data = yield call(() =>
    fetch("/api/getProblems")
      .then(response => response.json())
      .then(sheet => sheet)
  );
  var problems = {};

  for (var i = 0; i < data.length; i++) {
    const problem = data[i];
    if (problem[attributes.published] === publishedStates.published) {
      problems[problem[attributes.uid]] = problem;
    }
  }

  yield put(setProblems(problems));
}

export function* watchFetchProblems() {
  yield takeEvery(ProblemTypes.FETCH_PROBLEMS, fetchProblems);
}
