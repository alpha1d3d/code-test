import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Start, Test1, Test2 } from "./Main";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/start" component={Start} />
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Redirect from="/" to="/start" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
