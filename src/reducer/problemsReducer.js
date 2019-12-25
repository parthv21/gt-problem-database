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
  return state.data.problems[id];
};

export const getProblems = state => {
  const searchText = state.config.searchText;
  const filterTags = state.config.tags;
  const problems = state.data.problems;

  var filteredProblems = {};

  if (searchText === "" && filterTags.length === 0) return problems;

  const keys = Object.keys(problems);
  for (const key of keys) {
    var problem = problems[key];
    var keep = true;

    if (searchText !== "") {
      const inProblemStatement = problem["Problem Statement"]
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const inSponsor = problem["Affiliated Organization"]
        .toLowerCase()
        .includes(searchText.toLowerCase());

      if (!inProblemStatement && !inSponsor) {
        keep = false;
      }
    }

    if (filterTags.length > 0) {
      const tags = problem["Tags"].split(",");
      const commonTags = tags.filter(value => filterTags.includes(value));
      if (!commonTags.length > 0) {
        keep = false;
      }
    }

    if (keep) {
      filteredProblems[problem["uid"]] = problem;
    }
  }

  // if (filterTags.length === 0) return filteredProblems;

  // if (searchText === "") filteredProblems = problems;

  // const tempProblems = filteredProblems;
  // filteredProblems = {};

  // const keys = Object.keys(tempProblems);
  // for (const key of keys) {
  //   var problem = problems[key];
  //   const tags = problem["Tags"].split(",");
  //   const commonTags = tags.filter(value => filterTags.includes(value));

  //   if (commonTags.length > 0) {
  //     filteredProblems[problem["uid"]] = problem;
  //   }
  // }
  // console.log(filteredProblems);
  return filteredProblems;
};

export default problemsReducer;
