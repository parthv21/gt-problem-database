import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faSearch,
  faSortNumericDown,
  faSortNumericDownAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

import { getSearchText, getDescendingSort } from "../../reducer/configReducer";
import {
  setSearchText,
  clearSearchText,
  toggleSortOrder
} from "../../actions/configActions";

import logo from "../../assets/logo.svg";
import sheet from "../../assets/sheets.png";

import "../../styles/searchBar.css";

class SearchBar extends Component {
  render() {
    const {
      searchText,
      descendingSort,
      setSearchText,
      clearSearchText,
      toggleSortOrder
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
      </div>
    );
  }
}

const mapStateToProp = state => ({
  searchText: getSearchText(state),
  descendingSort: getDescendingSort(state)
});

const mapDispatchToProp = dispatch => ({
  setSearchText: searchText => dispatch(setSearchText(searchText)),
  clearSearchText: () => dispatch(clearSearchText()),
  toggleSortOrder: () => dispatch(toggleSortOrder())
});

const ConnectedSearchBar = connect(
  mapStateToProp,
  mapDispatchToProp
)(SearchBar);

export default ConnectedSearchBar;
