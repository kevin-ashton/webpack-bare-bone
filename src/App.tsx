import React, { ReactElement } from "react";
import _ from "lodash-es";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { stylesheet } from "typestyle";
import { NotFoundPage } from "./pages/NotFound";
import { HomePage } from "./pages/Home";
import { ExamplePage } from "./pages/Example";

export function App(): ReactElement {
  return (
    <div className={classes.wrapper}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/example" exact component={ExamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

const classes = stylesheet({
  wrapper: {
    flex: 1,
  },
});
