import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/pages/Dashboard";
import PasswordRecovery from "./components/pages/PasswordRecovery";
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route exact={true} path="/auth/login" component={Login}></Route>
          <Route exact={true} path="/auth/signup" component={Signup}></Route>
          <Route exact={true} path="/dashboard" component={Dashboard}></Route>
          <Route
            exact={true}
            path="/recoverpassword"
            component={PasswordRecovery}
          ></Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
