import ConfigTypes from "../types/configTypes";

var defaultState = {
  searchText: "",
  tags: [],
  descendingSort: true
};

const configReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ConfigTypes.SET_SEARCH_TEXT: {
      return { ...state, searchText: action.searchText };
    }

    case ConfigTypes.CLEAR_SEARCH_TEXT: {
      return { ...state, searchText: "" };
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

    case ConfigTypes.TOGGLE_SORT_ORDER: {
      return { ...state, descendingSort: !state.descendingSort };
    }

    default:
      return state;
  }
};

export const getSearchText = state => {
  return state.config.searchText;
};

export const getSelectedTags = state => {
  return state.config.tags;
};

export const getDescendingSort = state => {
  return state.config.descendingSort;
};

export default configReducer;
