import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { compose } from "redux";
import { withRouter } from "react-router";

import Logo from "../../assets/logo.png";
import { useStyles } from "./styles.js";
import { primary } from "../../utils/colors";

const TopBar = ({ history }) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.AppBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={
            history.location.pathname == "/"
              ? () => history.push("/")
              : () => history.push("/dashboard")
          }
        >
          <img src={Logo} className={classes.TopBarLogo} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link
            className={classes.TopBarLink}
            onClick={
              history.location.pathname == "/"
                ? () => history.push("/")
                : () => history.push("/dashboard")
            }
          >
            Kitty Payments
          </Link>
        </Typography>
        {history.location.pathname == "/" && (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => history.push("/dashboard")}
          >
            Start Now
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default compose(withRouter)(TopBar);
