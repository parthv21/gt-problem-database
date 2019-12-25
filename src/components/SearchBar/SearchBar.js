import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { getSearchText } from "../../reducer/configReducer";
import { setSearchText } from "../../actions/configActions";

import logo from "../../assets/logo.svg";
import sheet from "../../assets/sheets.png";

class SearchBar extends Component {
  render() {
    const { searchText, setSearchText } = this.props;
    return (
      <div className="search-bar-container">
        <span className="tag-line">
          Problem Database <br /> React + Sheets
        </span>
        <img src={sheet} className="Sheet-logo" alt="sheet" />
        <img src={logo} className="App-logo" alt="logo" />
        <FontAwesomeIcon icon={faEllipsisV} className="separator" />
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
  searchText: getSearchText(state)
});

const mapDispatchToProp = dispatch => ({
  setSearchText: searchText => dispatch(setSearchText(searchText))
});

const ConnectedSearchBar = connect(
  mapStateToProp,
  mapDispatchToProp
)(SearchBar);

export default ConnectedSearchBar;
