import React from "react";
import Button from "@material-ui/core/Button";
import { compose } from "redux";
import { withRouter } from "react-router";

import logo from "../../../../assets/financial-growth.png";
import { useStyles } from "./styles.js";
import { BodyContainer } from "../../../../components/Body/index";

let Body = ({ history }) => {
  const classes = useStyles();

  return (
    <BodyContainer>
      <div className={classes.landingContainer}>
        <img src={logo} className={classes.banner} />
        <div className={classes.landingDescription}>
          <h1 className={classes.landingDescriptionTitle}>
            Keep track off you payments with Kitty Payments
          </h1>
          <h3 className={classes.landingDescriptionSubtitle}>
            The best platform to register, delete, view & the best user
            experience in the market
          </h3>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => history.push("dashboard")}
          >
            Start Now
          </Button>
        </div>
      </div>
    </BodyContainer>
  );
};
Body = compose(withRouter)(Body);

export { Body };
