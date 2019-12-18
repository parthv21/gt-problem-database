import ProblemTypes from "../types/problemsTypes";
import Tabletop from "tabletop";

var defaultState = {
  problems: []
};

const problemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ProblemTypes.FETCH_PROBLEMS: {
      console.log("Fetching Problems");
      Tabletop.init({
        key: action.key,
        callback: googleData => {
          console.log(googleData);
          var newState = { problems: googleData };
          return newState;
        },
        simpleSheet: true
      });
      console.log("Exited");
      break;
    }
    default:
      return state;
  }
};

export default problemsReducer;
