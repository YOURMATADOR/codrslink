import React from "react";
import TextField from "@material-ui/core/TextField";

import { useStyles } from "./styles.js";
import { set_actual_payment_value } from "../../../Dashboard/components/body/actions/payments.js";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import validator from "validator";

let PaymentTitle = ({ value, setName }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Name of the payment...</h1>
      <TextField
        required
        color="secondary"
        size="medium"
        id="filled-required"
        variant="filled"
        label="Payment name"
        className={"paymemt-input"}
        defaultValue={value ? value : ""}
        value={value ? value : ""}
        InputProps={{
          value: value ? value : "",
        }}
        onChange={(e) => {
          setName("name", e.target.value);
        }}
      />
    </div>
  );
};

let mapStateToProps = (state) => ({
  value: state.payments.actual_payment.name,
});

let mapDispatchToProps = (dispatch) => ({
  setName: (name, content) =>
    dispatch(set_actual_payment_value({ name, content })),
});
PaymentTitle = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PaymentTitle);

export { PaymentTitle };
