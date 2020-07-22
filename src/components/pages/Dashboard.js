import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/fire";
import { Helmet } from "react-helmet";
const Dashboard = (props, { name }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BoilerPlate
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  Log out
                </Link>
              </li>
              <li>{name}</li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="text-center">Dashboard</h1>
    </Fragment>
  );
  function logout() {
    firebase.auth().signOut();
  }
};

export default Dashboard;
