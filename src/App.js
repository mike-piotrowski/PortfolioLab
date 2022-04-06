import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Login from "./components/login";
import Register from "./components/register";

import "../src/scss/main.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
