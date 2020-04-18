import React, { useEffect } from "react";
import { useStyles } from "./styles.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { BodyContainer } from "../../../../components/Body";
import { AddPayButton } from "../../../../components/AddPayButton/index.js";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import noPaymentsLogo from "../../../../assets/fogg-page-not-found-1.png";
import { ListItemAvatar } from "@material-ui/core";
import { EditButton } from "../../../../components/EditButton/index.js";
import { DeleteButton } from "../../../../components/DeleteButton/index.js";

let Body = ({ payments }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  console.log(checked);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  useEffect(() => {
    if (payments.length < 1) {
      setChecked([]);
    }
  }, [payments]);
  return (
    <BodyContainer>
      {payments.length < 1 && (
        <div className={classes.noPaymentsContainer}>
          <img src={noPaymentsLogo} className={classes.noPaymentsLogo} />
          <h2>
            No payments registered, press the add button to add a new payment
          </h2>
        </div>
      )}
      {
        <List className={classes.root}>
          {payments.map((i, e) => (
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <h1>#{e}</h1>
              </ListItemAvatar>
              <div>
                <h1>{i.name}</h1>
                <h2>$ {i.quantity}</h2>
                <h5>{i.date}</h5>
              </div>
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(e)}
                  checked={checked.indexOf(e) !== -1}
                  inputProps={{
                    "aria-labelledby": `checkbox-list-secondary-label-${e}`,
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      }
      <AddPayButton />
      {checked.length > 0 && checked.length < 2 && (
        <EditButton element={checked} />
      )}
      {checked.length > 0 && <DeleteButton element={checked} />}
    </BodyContainer>
  );
};

let mapStateToProps = (state) => ({
  payments: state.payments.payments,
});

Body = compose(connect(mapStateToProps), withRouter)(Body);

export { Body };
