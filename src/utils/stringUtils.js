import _ from "lodash";

const checkForMatch = (
  source,
  searchText,
  matchCaseSensitive,
  matchWholeWord
) => {
  searchText = _.escapeRegExp(searchText);

  var regex = searchText;
  regex = matchWholeWord ? "\\b" + regex + "\\b" : regex;
  var options = "g";
  options += !matchCaseSensitive ? "i" : "";

  return new RegExp(regex, options).test(source);
};

const addHighlightSpan = (
  source,
  searchText,
  matchGlobal,
  matchCaseSensitive,
  matchWholeWord
) => {
  searchText = _.escapeRegExp(searchText);

  var options = matchGlobal ? "g" : "";
  options += !matchCaseSensitive ? "i" : "";

  var regex = matchWholeWord
    ? "(\\b" + searchText + "\\b)"
    : "(" + searchText + ")";

  var highlightedSource = source.replace(
    new RegExp(regex, options),
    '<span class="search-highlight">$1</span>'
  );

  const adjSpanFilter = '</span><span class="search-highlight">';
  highlightedSource = highlightedSource.replace(
    new RegExp(adjSpanFilter, "g"),
    ""
  );

  return highlightedSource;
};

const stripHtml = source => {
  return source.replace(/<[^>]*>?/gm, "");
};

const unescapeRegex = source => {
  return source.replace(/\\(.)/g, "$1");
};

export { checkForMatch, addHighlightSpan, stripHtml, unescapeRegex };
