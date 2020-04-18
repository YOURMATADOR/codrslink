import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useStyles } from "./styles.js";
import moment from "moment";
import { connect } from "react-redux";
import { set_actual_payment_value } from "../../../Dashboard/components/body/actions/payments.js";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

let PaymentDate = ({ value, setDate }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate("date", date ? moment(date).format() : moment().format());
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}> Date of the payment...</h1>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          className="payment-date"
          margin="normal"
          color="secondary"
          id="date-picker-dialog"
          label="Select a date"
          format="MM/dd/YYYY"
          value={value ? value : selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

let mapStateToProps = (state) => ({
  value: state.payments.actual_payment.date,
});

let mapDispatchToProps = (dispatch) => ({
  setDate: (name, content) =>
    dispatch(set_actual_payment_value({ name, content })),
});
PaymentDate = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PaymentDate);

export { PaymentDate };
