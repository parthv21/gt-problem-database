import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import Tabletop from "tabletop";
import Linkify from "linkifyjs/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

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
          {console.log("STATE: ", this.state)}
          {/*
            this.state.problems.map(obj => {
            // console.log(obj);
            var probDesc = obj["Problem Description"];
            var probDesc = probDesc.split("\n");
            // for (var i = 0; i < probDesc.length; i++) {
            //   console.log(probDesc[i]);
            // }

            return (
              <div key={obj["Timestamp"]}>
                <pre>
                  <Link to="/details">{obj["Problem Statement"]}</Link>
                </pre>
                <pre>
                  <Linkify>{obj["Contact Details"]}</Linkify>
                </pre>
                <pre>
                  <Linkify>{obj["Problem Description"]}</Linkify>
                </pre>
                <pre>
                  <Linkify>{obj["Problem Description"]}</Linkify>
                </pre>
              </div>
            );
          })
          */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  problems: state.problems
});

const mapDispatchToProps = dispatch => ({});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
