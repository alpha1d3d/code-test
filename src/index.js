import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Main from "./Main";

class App extends React.Component {
  render() {
    return <Main />;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Main />
          <Route path="/start" component={Main} />
          <Redirect from="/" to="/start" />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
