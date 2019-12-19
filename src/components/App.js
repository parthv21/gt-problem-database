import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import Tabletop from "tabletop";
import Linkify from "linkifyjs/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  // componentDidMount() {
  //   Tabletop.init({
  //     key: "1YJHZdoPdEIUE46BSdAGz8BCE10-VMasHI3y4dT3CXp0",
  //     callback: googleData => {
  //       this.setState({
  //         data: googleData
  //       });
  //     },
  //     simpleSheet: true
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
        <div id="employee-details">
          {this.props.problems.map(problem => {
            return (
              <div key={problem["Timestamp"]}>
                <pre>
                  <Link to="/details">{problem["Problem Statement"]}</Link>
                </pre>
                <pre>
                  <Linkify>{problem["Contact Details"]}</Linkify>
                </pre>
                <pre>
                  <Linkify>{problem["Problem Description"]}</Linkify>
                </pre>
                <pre>
                  <Linkify>{problem["Problem Description"]}</Linkify>
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
  console.log("MAP STATE TO PROPS");
  console.log(state);
  return {
    problems: state.problems
  };
};

const mapDispatchToProps = dispatch => ({});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
