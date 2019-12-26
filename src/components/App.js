import React, { Component } from "react";
import { connect } from "react-redux";

import { getProblems } from "../reducer/problemsReducer";
import { getSelectedTags } from "../reducer/configReducer";

import SearchBar from "./searchBar/SearchBar";
import SelectedTags from "./selectedTags/SelectedTags";
import ProblemPreview from "./preview/ProblemPreview";

import hero from "../assets/hero.png";
import "../styles/App.css";
import "../styles/Problem.css";

class App extends Component {
  render() {
    const { problems, selectedTags } = this.props;

    return (
      <div className="App">
        <header className="App-header">
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
