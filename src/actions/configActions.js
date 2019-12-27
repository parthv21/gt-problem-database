import ConfigTypes from "../types/configTypes";

const setSearchText = searchText => ({
  type: ConfigTypes.SET_SEARCH_TEXT,
  searchText
});

const clearSearchText = () => ({
  type: ConfigTypes.CLEAR_SEARCH_TEXT
});

const addTag = tag => ({
  type: ConfigTypes.ADD_TAG,
  tag
});

const removeTag = tag => ({
  type: ConfigTypes.REMOVE_TAG,
  tag
});

const toggleSortOrder = () => ({
  type: ConfigTypes.TOGGLE_SORT_ORDER
});

export { setSearchText, clearSearchText, addTag, removeTag, toggleSortOrder };
