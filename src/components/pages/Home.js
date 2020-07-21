import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1 className="text-center">Welcome to the react boilerplate</h1>
      </div>
    </Fragment>
  );
};

export default Home;
