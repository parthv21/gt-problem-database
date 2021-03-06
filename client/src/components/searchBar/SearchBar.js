import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faSearch,
  faSortNumericDown,
  faSortNumericDownAlt,
  faCalendarAlt,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

import { getProblemsCount } from "../../reducer/problemsReducer";

import {
  getSearchText,
  getDescendingSort,
  getCaseSensitiveMatch,
  getWholeWordMatch
} from "../../reducer/configReducer";
import {
  setSearchText,
  clearSearchText,
  toggleSortOrder,
  toggleCaseSensitiveMatch,
  toggleWholeWordMatch
} from "../../actions/configActions";

import "../../styles/searchBar.css";

class SearchBar extends Component {
  render() {
    const {
      searchText,
      descendingSort,
      caseSensitiveMatch,
      wholeWordMatch,
      problemsCount,
      setSearchText,
      clearSearchText,
      toggleSortOrder,
      toggleCaseSensitiveMatch,
      toggleWholeWordMatch
    } = this.props;
    return (
      <div className="reverse-flex-container search-bar-container">
        <div
          className="project-name"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeRhKmiRC-Gzfg277BNJN9yoio2NulqzxTXgNU0kU2uJeUmBA/viewform"
            )
          }
        >
          <div>
            <FontAwesomeIcon icon={faLightbulb} className="ideas-btn-icon" />
            <span className="tag-line">Submit an Idea</span>
          </div>
        </div>
        <div className="search-bar-text">
          {problemsCount} {problemsCount > 1 ? "problems" : "problem"}
        </div>
        <div
          className="search-bar-btn-container"
          onClick={() => toggleSortOrder()}
        >
          <div data-tip="Toggle problem sort order">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="sort-order-toggle-btn sort-order-calendar"
            />
            <FontAwesomeIcon
              icon={descendingSort ? faSortNumericDownAlt : faSortNumericDown}
              className="sort-order-toggle-btn"
            />
          </div>
        </div>
        <div className="reverse-flex-container">
          <div
            className={
              wholeWordMatch
                ? "search-settings-btn selected-search-settings-btn"
                : "search-settings-btn"
            }
            onClick={() => toggleWholeWordMatch()}
          >
            <div data-tip="Toggle word match">
              <span
                className="whole-word-match-toggle"
                style={{ paddingRight: "4px" }}
              >
                Ab
              </span>
              <span style={{ marginLeft: "-9px", fontWeight: 100 }}>｜</span>
            </div>
          </div>

          <div
            className={
              caseSensitiveMatch
                ? "padded-ssb search-settings-btn selected-search-settings-btn"
                : "padded-ssb search-settings-btn"
            }
            onClick={() => toggleCaseSensitiveMatch()}
          >
            <div data-tip="Toggle case sensitive match">
              <span>aA</span>
            </div>
          </div>

          {searchText.length !== 0 ? (
            <div className="clear-search-btn-container">
              <div
                className="clear-search-btn"
                onClick={() => clearSearchText()}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            </div>
          ) : (
            <div />
          )}
          <input
            placeholder="Search problems..."
            className="search-bar"
            value={searchText}
            type="text"
            onChange={e => setSearchText(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>

        <ReactTooltip effect="solid" className="tool-tip" />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  searchText: getSearchText(state),
  descendingSort: getDescendingSort(state),
  caseSensitiveMatch: getCaseSensitiveMatch(state),
  wholeWordMatch: getWholeWordMatch(state),
  problemsCount: getProblemsCount(state)
});

const mapDispatchToProp = dispatch => ({
  setSearchText: searchText => dispatch(setSearchText(searchText)),
  clearSearchText: () => dispatch(clearSearchText()),
  toggleSortOrder: () => dispatch(toggleSortOrder()),
  toggleCaseSensitiveMatch: () => dispatch(toggleCaseSensitiveMatch()),
  toggleWholeWordMatch: () => dispatch(toggleWholeWordMatch())
});

const ConnectedSearchBar = connect(
  mapStateToProp,
  mapDispatchToProp
)(SearchBar);

export default ConnectedSearchBar;
