import ProblemTypes from "../types/problemsTypes";

const fetchProblems = key => ({
  type: ProblemTypes.FETCH_PROBLEMS,
  key
});

const setProblems = problems => ({
  type: ProblemTypes.SET_PROBLEMS,
  problems
});

export { fetchProblems, setProblems };
