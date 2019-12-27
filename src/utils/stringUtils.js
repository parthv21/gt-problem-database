const addGlobalHighlightSpan = (source, searchText) => {
  return source.replace(
    new RegExp("(" + searchText + ")", "gi"),
    '<span class="search-highlight">$1</span>'
  );
};

const addHighlightSpan = (source, searchText) => {
  return source.replace(
    new RegExp("(" + searchText + ")", "i"),
    '<span class="search-highlight">$1</span>'
  );
};

const stripHtml = source => {
  return source.replace(/<[^>]*>?/gm, "");
};

export { addGlobalHighlightSpan, addHighlightSpan, stripHtml };
