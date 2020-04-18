import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";

import { useStyles } from "./styles.js";
import { set_actual_payment_value } from "../../../Dashboard/components/body/actions/payments.js";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import validator from "validator";

let PaymentQuantity = ({ value, setquantity }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Quantity...</h1>
      <TextField
        required
        color="secondary"
        size="medium"
        id="filled-required"
        variant="filled"
        className={"paymemt-input"}
        value={value ? value : ""}
        defaultValue={value ? value : ""}
        InputProps={{
          value: value ? value : "",
          startAdornment: (
            <InputAdornment position="start">
              <MonetizationOn className={classes.money} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          if (validator.isNumeric(e.target.value, { no_symbols: true }))
            setquantity("quantity", e.target.value);
          else return;
        }}
      />
    </div>
  );
};

let mapStateToProps = (state) => ({
  value: state.payments.actual_payment.quantity,
});

let mapDispatchToProps = (dispatch) => ({
  setquantity: (name, content) =>
    dispatch(set_actual_payment_value({ name, content })),
});
PaymentQuantity = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PaymentQuantity);

export { PaymentQuantity };
