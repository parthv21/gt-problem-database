import ConfigTypes from "../types/configTypes";

const setSearchText = searchText => ({
  type: ConfigTypes.SET_SEARCH_TEXT,
  searchText
});

const addTag = tag => ({
  type: ConfigTypes.ADD_TAG,
  tag
});

const removeTag = tag => ({
  type: ConfigTypes.REMOVE_TAG,
  tag
});

export { setSearchText, addTag, removeTag };
