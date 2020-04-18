import React, { Fragment } from "react";
import { compose } from "redux";
import { withRouter } from "react-router";

import { Header } from "../components/header";
import { Body } from "../components/body";
const Landing = (props) => {
  return (
    <Fragment>
      <Header />
      <Body />
    </Fragment>
  );
};

export default compose(withRouter)(Landing);
