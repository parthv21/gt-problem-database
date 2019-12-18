import ProblemTypes from "../types/problemsTypes";

const fetchProblems = key => ({
  type: ProblemTypes.FETCH_PROBLEMS,
  key
});

export default fetchProblems;
