const checkForMatch = (
  source,
  searchText,
  matchCaseSensitive,
  matchWholeWord
) => {
  var regex = searchText;
  regex = matchWholeWord ? "\\b" + regex + "\\b" : regex;
  var options = "g";
  options += !matchCaseSensitive ? "i" : "";

  const matches = new RegExp(regex, options).test(source);
  return matches;
};

const addHighlightSpan = (
  source,
  searchText,
  matchGlobal,
  matchCaseSensitive,
  matchWholeWord
) => {
  var options;
  options = matchGlobal ? "g" : "";
  options += !matchCaseSensitive ? "i" : "";
  var regex = matchWholeWord
    ? "(\\b" + searchText + "\\b)"
    : "(" + searchText + ")";
  return source.replace(
    new RegExp(regex, options),
    '<span class="search-highlight">$1</span>'
  );
};

const stripHtml = source => {
  return source.replace(/<[^>]*>?/gm, "");
};

export { checkForMatch, addHighlightSpan, stripHtml };
