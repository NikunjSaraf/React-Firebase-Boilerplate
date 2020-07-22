import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import firebase from "../../config/fire";
import Navbar from "../layout/Navbar";

const Signup = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function validate(event) {
    const regX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";

    if (password.match(!reg)) {
      alert("Please Enter a Valid Password");
    }
    if (email.match(!regX)) {
      alert("Please Enter a valid Email Address");
    }
  }
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Helmet>
          <title>Sign-up Page</title>
        </Helmet>
        <div className="rows">
          <h1 className="text-center">Sign-up Form</h1>
          <div className="cols-6">
            <form onSubmit={(e) => e.preventDefault() && false}>
              <div className="form-group">
                <label className="control-label">Full-Name</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    autoFocus
                    autoComplete="off"
                    required
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

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
                    onInput={validate()}
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
                    onInput={validate()}
                    placeholder="Enter your Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label">Confirm Password :</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    autoFocus
                    autoComplete="off"
                    required
                    value={cpassword}
                    placeholder="Confirm Your Password"
                    onChange={(e) => setcpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={signup}
                  style={{ marginTop: "5%" }}
                >
                  Sign Up
                </button>
                <div className="or-container">
                  <div className="line-separator"></div>
                  <div className="or-label">or</div>
                  <div className="line-separator"></div>
                </div>
                <button
                  className="btn btn-google btn-block"
                  onClick={googleSignup}
                >
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt=""
                  />
                  Sign up with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
  function signup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        if (authUser.user.emailVerified) {
          console.log("Email Verified");
        } else {
          console.log("Email not verified");
        }
        props.history.replace("/auth/login");
      })
      .catch((err) => {
        alert(err);
        console.log(err + err.message);
      });
  }
  function googleSignup() {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        props.history.replace("/dashboard");
      });
  }
};

export default Signup;
