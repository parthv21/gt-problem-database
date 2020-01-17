import ProblemTypes from "../types/problemsTypes";

const fetchProblems = () => ({
  type: ProblemTypes.FETCH_PROBLEMS
});

const setProblems = problems => ({
  type: ProblemTypes.SET_PROBLEMS,
  problems
});

export { fetchProblems, setProblems };
