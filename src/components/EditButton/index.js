import React from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles } from "./styles.js";
import Tooltip from "@material-ui/core/Tooltip";
import { compose } from "redux";
import { withRouter } from "react-router";
import { set_actual_payment_value } from "../../features/Dashboard/components/body/actions/payments.js";
import { connect } from "react-redux";

let EditButton = ({ history, setEdit, element }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Add" aria-label="add">
      <Fab
        aria-label="add"
        className={classes.addButton}
        color="primary"
        size="small"
        onClick={() => {
          if (element.length > 0) {
            setEdit("editing", element[0]);
            history.push("payment");
          }
        }}
      >
        <EditIcon />
      </Fab>
    </Tooltip>
  );
};

let mapStateToProps = (state) => ({
  value: state.payments.actual_payment.quantity,
});

let mapDispatchToProps = (dispatch) => ({
  setEdit: (name, content) =>
    dispatch(set_actual_payment_value({ name, content })),
});
EditButton = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(EditButton);

export { EditButton };
