import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../layout/Navbar";
import firebase from "../../config/fire";

const PasswordRecovery = () => {
  const [email, setemail] = useState("");

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Helmet>
          <title>Password Recovery Page</title>
        </Helmet>
        <div className="rows">
          <h1 className="text-center">Password Recover Form</h1>
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
                <button
                  className="btn btn-primary btn-block"
                  onClick={passwordrecover}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
  function passwordrecover() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Please check your Email for Password Recovery", email.value);
      });
  }
};

export default PasswordRecovery;
