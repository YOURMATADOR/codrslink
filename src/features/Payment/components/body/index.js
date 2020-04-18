import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PaymentTitle } from "../PaymentTitle";
import { BodyContainer } from "../../../../components/Body";
import { useStyles } from "./styles.js";
import { PaymentDate } from "../PaymentDate";
import { PaymentQuantity } from "../PaymentQuantity";
import {
  add_payment,
  edit_payment,
} from "../../../Dashboard/components/body/actions/payments";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import moment from "moment";

function getSteps() {
  return ["Set pay name", "Set date", "Set quantity"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentTitle />;
    case 1:
      return <PaymentDate />;
    case 2:
      return <PaymentQuantity />;
    default:
      return "Unknown step";
  }
}

let Body = ({
  name,
  quantity,
  date,
  addPayment,
  history,
  editing,
  editPayment,
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep === steps.length - 1) {
      if (editing) {
        editPayment(name, quantity, date, editing);
      } else {
        addPayment(name, quantity, date);
      }
      history.push("dashboard");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <BodyContainer className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} className={classes.label}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                color={"secondary"}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </BodyContainer>
  );
};

let mapStateToProps = (state) => ({
  name: state.payments.actual_payment.name,
  quantity: state.payments.actual_payment.quantity,
  date: state.payments.actual_payment.date,
  editing: state.payments.actual_payment.editing,
});

let mapDispatchToProps = (dispatch) => ({
  addPayment: (name, quantity, date) =>
    dispatch(add_payment({ name, quantity, date })),
  editPayment: (name, quantity, date, index) =>
    dispatch(edit_payment({ name, quantity, date, index })),
});

Body = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Body);
export { Body };
