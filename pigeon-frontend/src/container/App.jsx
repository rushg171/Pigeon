import React, { Component } from "react";
import { Route, Switch } from "react-router";
import {
  Dashboard,
  Home,
  Members,
  Procedure,
  Project,
  Settings,
  Tasks
} from "../components";
import Menu from "./Layouts";

const style = {
  display: "flex"
};

export default class App extends Component {
  render() {
    return (
      <div style={style}>
        <Menu />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/procedure" component={Procedure} />
            <Route path="/project" component={Project} />
            <Route path="/members" component={Members} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}
