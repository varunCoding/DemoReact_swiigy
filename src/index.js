import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import App from "./App.js";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <App />
        {/* <Switch>
      <Route path="/login" component={App} />
      <Redirect from="/" to="/login" />
    </Switch> */}
    </Router>,
    document.getElementById("root")
);
