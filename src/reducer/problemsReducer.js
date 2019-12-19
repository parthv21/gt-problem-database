import ProblemTypes from "../types/problemsTypes";

var defaultState = {
  problems: []
};

const problemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case ProblemTypes.FETCH_PROBLEMS: {
    //   console.log("Fetching Problems");
    //   Tabletop.init({
    //     key: action.key,
    //     callback: googleData => {
    //       console.log(googleData);
    //       var newState = { problems: googleData };
    //       return newState;
    //     },
    //     simpleSheet: true
    //   });
    //   console.log("Exited");
    //   break;
    // }

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

export default problemsReducer;
