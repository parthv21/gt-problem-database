import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProblemStatement from "./ProblemStatement";
import TagContainer from "./TagContainer";
import SponsorInformation from "./SponsorInformation";

import logo from "../assets/logo.svg";
import sheet from "../assets/sheets.png";
import "../styles/App.css";
import "../styles/Problem.css";

class App extends Component {
  render() {
    var problems = this.props.problems;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={sheet} className="Sheet-logo" alt="sheet" />
          <h1 className="App-title">Problem Database: React + Google Sheets</h1>
        </header>
        <div>
          {Object.keys(problems).map(function(key, index) {
            var problem = problems[key];
            var id = problem["uid"];
            var problemStatement = problem["Problem Statement"];
            var tags = problem["Tags"].split(",");
            var sponsor = problem["Affiliated Organization"];

            return (
              <Link to={"/details/" + id} className="text-link">
                <div key={id} className="problem-preview">
                  <pre>
                    <ProblemStatement problemStatement={problemStatement} />
                    <SponsorInformation sponsor={sponsor} />
                    <TagContainer tags={tags} clickable />
                  </pre>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state.problems
  };
};

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
