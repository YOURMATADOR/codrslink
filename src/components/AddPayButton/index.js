import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./styles.js";
import Tooltip from "@material-ui/core/Tooltip";
import { compose } from "redux";
import { withRouter } from "react-router";

let AddPayButton = ({ history }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Add" aria-label="add">
      <Fab
        aria-label="add"
        className={classes.addButton}
        onClick={() => history.push("payment")}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

AddPayButton = compose(withRouter)(AddPayButton);

export { AddPayButton };
