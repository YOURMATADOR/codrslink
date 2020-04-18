import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles.js";
import Tooltip from "@material-ui/core/Tooltip";
import { compose } from "redux";
import { withRouter } from "react-router";
import {
  set_actual_payment_value,
  delete_payment,
} from "../../features/Dashboard/components/body/actions/payments.js";
import { connect } from "react-redux";

let DeleteButton = ({ history, deleteMultiple, element }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Add" aria-label="add">
      <Fab
        aria-label="add"
        className={classes.addButton}
        color="secondary"
        size="small"
        onClick={() => {
          if (element.length > 0) {
            deleteMultiple(element);
          }
        }}
      >
        <DeleteIcon />
      </Fab>
    </Tooltip>
  );
};

let mapStateToProps = (state) => ({
  value: state.payments.actual_payment.quantity,
});

let mapDispatchToProps = (dispatch) => ({
  deleteMultiple: (index) => dispatch(delete_payment({ index })),
});
DeleteButton = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(DeleteButton);

export { DeleteButton };
