import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faSearch,
  faSortNumericDown,
  faSortNumericDownAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

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

import logo from "../../assets/logo.svg";
import sheet from "../../assets/sheets.png";

import "../../styles/searchBar.css";

class SearchBar extends Component {
  render() {
    const {
      searchText,
      descendingSort,
      caseSensitiveMatch,
      wholeWordMatch,
      setSearchText,
      clearSearchText,
      toggleSortOrder,
      toggleCaseSensitiveMatch,
      toggleWholeWordMatch
    } = this.props;
    return (
      <div className="search-bar-container">
        <div className="project-name">
          <img src={logo} className="app-logo logo" alt="logo" />
          <img src={sheet} className="sheet-logo logo" alt="sheet" />
          <div>
            <span className="tag-line">
              Problem Database <br /> React + Sheets
            </span>
          </div>
        </div>

        <div
          className="search-bar-btn-container"
          onClick={() => toggleSortOrder()}
        >
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="sort-order-toggle-btn sort-order-calendar"
          />
          <FontAwesomeIcon
            icon={descendingSort ? faSortNumericDownAlt : faSortNumericDown}
            className="sort-order-toggle-btn"
          />
        </div>

        <div
          className={
            wholeWordMatch
              ? "search-settings-btn selected-search-settings-btn"
              : "search-settings-btn"
          }
          onClick={() => toggleWholeWordMatch()}
          data-tip="Toggle word match"
        >
          <span
            className="whole-word-match-toggle"
            style={{ paddingRight: "5px" }}
          >
            Ab
          </span>
          <span style={{ marginLeft: "-12px", fontWeight: 100 }}>｜</span>
        </div>

        <div
          className={
            caseSensitiveMatch
              ? "search-settings-btn selected-search-settings-btn"
              : "search-settings-btn"
          }
          onClick={() => toggleCaseSensitiveMatch()}
          data-tip="Toggle case sensitive match"
        >
          <span>aA</span>
        </div>

        {searchText.length !== 0 ? (
          <div className="clear-search-btn-container">
            <div className="clear-search-btn" onClick={() => clearSearchText()}>
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
        <ReactTooltip effect="solid" />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  searchText: getSearchText(state),
  descendingSort: getDescendingSort(state),
  caseSensitiveMatch: getCaseSensitiveMatch(state),
  wholeWordMatch: getWholeWordMatch(state)
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
