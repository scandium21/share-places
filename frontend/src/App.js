import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/places/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
