import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import firebase from "../../config/fire";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const regX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";

  if (password.match(!reg)) {
    alert("Please Enter a Valid Password");
  }

  if (email.match(!regX)) {
    alert("Please Enter a valid Email Address");
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <div className="rows">
          <h1 className="text-center">Login Form</h1>
          <div className="cols-6">
            <form onSubmit={(e) => e.preventDefault() && false}>
              <div className="form-group">
                <label className="control-label">Email-Id :</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    autoFocus
                    autoComplete="off"
                    required
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label">Password :</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    autoFocus
                    autoComplete="off"
                    required
                    value={password}
                    placeholder="Enter your Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>
              <Link to="/recoverPassword" className="recoverpassword">
                Forgot Password?
              </Link>
              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={login}>
                  Sign In
                </button>
                <div className="or-container">
                  <div className="line-separator"></div>
                  <div className="or-label">or</div>
                  <div className="line-separator"></div>
                </div>
                <button
                  className="btn btn-google btn-block"
                  onClick={googleSignin}
                >
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt=""
                  />
                  Sign In with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );

  function login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.alert("Login Successfull!");
        props.history.replace("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error + error.message);
      });
  }
  function googleSignin() {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        alert("Successfull");
        props.history.replace("/dashboard");
      });
  }
};

export default Login;
