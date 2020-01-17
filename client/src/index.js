import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "react-router-scroll-top";

import "./styles/index.css";

import store from "./store/configureStore";
import { fetchProblems } from "./actions/problemsAction";

import App from "./components/App";
import ProblemDetails from "./components/problem/ProblemDetails";
import registerServiceWorker from "./registerServiceWorker";

store.dispatch(fetchProblems());

const Routing = (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={ProblemDetails} />
      </ScrollToTop>
    </Router>
  </Provider>
);

ReactDOM.render(Routing, document.getElementById("root"));
registerServiceWorker();
