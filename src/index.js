import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";

import store from "./store/configureStore";
import { fetchProblems } from "./actions/problemsAction";

import App from "./components/App";
import ProblemDetails from "./components/ProblemDetails";

import registerServiceWorker from "./registerServiceWorker";

store.dispatch(fetchProblems("1YJHZdoPdEIUE46BSdAGz8BCE10-VMasHI3y4dT3CXp0"));

const Routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={ProblemDetails} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));
registerServiceWorker();
