import ProblemTypes from "../types/problemsTypes";
import attributes from "../constants/attributes";
import { addGlobalHighlightSpan, addHighlightSpan } from "../utils/stringUtils";

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
    const tags = problem[attributes.tags].split(",");
    var highlightedTags;

    if (searchText !== "") {
      var inProblemStatement = false;
      var problemStatement = problem[attributes.statement];
      if (problemStatement.toLowerCase().includes(searchText.toLowerCase())) {
        inProblemStatement = true;
        problemStatement = addGlobalHighlightSpan(problemStatement, searchText);

        problem = {
          ...problem,
          [attributes.statement]: problemStatement
        };
      }
      var inSponsor = false;
      var sponsor = problem[attributes.sponsor];
      if (sponsor.toLowerCase().includes(searchText.toLowerCase())) {
        inSponsor = true;
        sponsor = addHighlightSpan(sponsor, searchText);
        console.log(sponsor);
        problem = {
          ...problem,
          [attributes.sponsor]: sponsor
        };
      }

      var inTag = false;
      highlightedTags = tags.map(tag => {
        if (tag.toLowerCase().includes(searchText)) {
          inTag = true;
          if (!filterTags.includes(tag)) {
            return addHighlightSpan(tag, searchText);
          }
        }
        return tag;
      });
      console.log("Highlighted Tags");
      console.log(highlightedTags);

      if (!inProblemStatement && !inSponsor && !inTag) {
        keep = false;
      }
    }

    if (filterTags.length > 0) {
      const commonTags = tags.filter(value => filterTags.includes(value));
      if (!commonTags.length > 0) {
        keep = false;
      }
    }

    if (keep) {
      problem = {
        ...problem,
        [attributes.tags]: highlightedTags.join(",")
      };
      filteredProblems[problem["uid"]] = problem;
    }
  }

  return filteredProblems;
};

export default problemsReducer;
