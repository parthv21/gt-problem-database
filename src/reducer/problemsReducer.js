import ProblemTypes from "../types/problemsTypes";

var defaultState = {
  problems: {}
};

const problemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ProblemTypes.SET_PROBLEMS: {
      console.log("Setting problems: \n");
      console.log(action.problems);
      var newState = { ...state, problems: action.problems };
      return newState;
    }

    default:
      return state;
  }
};

export const selectProblem = (state, id) => {
  return state.problems[id];
};

export default problemsReducer;
