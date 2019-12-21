import { combineReducers } from "redux";
import problemReducer from "./problemsReducer";
import configReducer from "./configReducer";

const rootReducer = combineReducers({
  config: configReducer,
  data: problemReducer
});

export default rootReducer;
