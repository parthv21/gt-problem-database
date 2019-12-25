import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getProblems } from "../reducer/problemsReducer";
import { getSelectedTags } from "../reducer/configReducer";

import SearchBar from "./SearchBar/SearchBar";
import SelectedTags from "./SelectedTags/SelectedTags";
import ProblemStatement from "./ProblemStatement";
import TagContainer from "./TagContainer";
import MetaInformation from "./MetaInformation";
import attributes from "../constants/attributes";

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
            var id = problem[attributes.uid];
            var problemStatement = problem[attributes.statement];
            var tags = problem[attributes.tags].split(",");
            var sponsor = problem[attributes.sponsor];
            var date = new Date(problem[attributes.timestamp]);
            return (
              <div key={id} className="problem-preview">
                <pre>
                  <Link to={"/details/" + id} className="text-link" key={id}>
                    <ProblemStatement problemStatement={problemStatement} />
                  </Link>
                  <MetaInformation title="Sponsor" info={sponsor} />
                  <MetaInformation
                    title="Created On"
                    info={
                      date.getMonth() +
                      "-" +
                      date.getDay() +
                      "-" +
                      date.getFullYear()
                    }
                  />
                  <TagContainer tags={tags} clickable />
                </pre>
              </div>
            );
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
