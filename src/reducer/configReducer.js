import ConfigTypes from "../types/configTypes";

var defaultState = {
  searchText: "",
  tags: []
};

const configReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ConfigTypes.SET_SEARCH_TEXT: {
      return { ...state, searchText: action.searchText };
    }

    case ConfigTypes.ADD_TAG: {
      if (!state.tags.includes(action.tag)) {
        return { ...state, tags: state.tags.concat(action.tag) };
      }
      return state;
    }

    case ConfigTypes.REMOVE_TAG: {
      return { ...state, tags: state.tags.filter(tag => tag !== action.tag) };
    }

    default:
      return state;
  }
};

export const getSearchText = state => {
  return state.config.search;
};

export default configReducer;
