import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Start from "./components/search.component";
import ResultsMap from "./components/results-map.component";
import Login from "./components/login.component";
import Hosts from "./components/hosts.component";
import Admins from "./components/admins.component";
import Search from "./components/search.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Start} />
        <Route path="/search" component={Search} />
        <Route path="/map" component={ResultsMap} />
        <Route path="/login" component={Login} />
        <Route path="/hosts" component={Hosts} />
        <Route path="/admins" component={Admins} />
      </Router>
    );
  }
}

export default App;