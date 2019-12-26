import React, { Component } from "react";
import { connect } from "react-redux";

import { getProblems } from "../reducer/problemsReducer";
import { getSelectedTags } from "../reducer/configReducer";

import SearchBar from "./searchBar/SearchBar";
import SelectedTags from "./selectedTags/SelectedTags";
import ProblemPreview from "./preview/ProblemPreview";

import hero from "../assets/hero.png";

import "../styles/app.css";
import "../styles/media-mobile.css";
import "../styles/media-web.css";

class App extends Component {
  render() {
    const { problems, selectedTags } = this.props;

    return (
      <div className="app">
        <header className="app-header">
          <img src={hero} className="hero" alt="hero" />
        </header>
        <header className="navbar">
          <SearchBar />
          <SelectedTags tags={selectedTags} />
        </header>

        <div>
          {Object.keys(problems).map(function(key, index) {
            var problem = problems[key];
            return <ProblemPreview problem={problem} key={key} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: getProblems(state),
    selectedTags: getSelectedTags(state)
  };
};

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
