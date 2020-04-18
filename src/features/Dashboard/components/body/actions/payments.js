import {
  SET_FIELD,
  ADD_PAYMENT,
  DELETE_ALL,
  EDIT_PAYMENT,
  DELETE_PAYMENT,
} from "../../../../../utils/constants";
import moment from "moment";

export const _set_actual_payment_value = ({ name, content }) => ({
  type: SET_FIELD,
  name,
  content,
});

export const _delete_actual_values = () => ({
  type: DELETE_ALL,
});

export const add_payment_action = ({ name, quantity, date }) => ({
  type: ADD_PAYMENT,
  name: name ? name : "",
  quantity: quantity ? quantity : "0",
  date: date ? date : moment().format(),
});

export const _edit_payment = ({ name, quantity, date, index }) => ({
  type: EDIT_PAYMENT,
  name: name ? name : "",
  quantity: quantity ? quantity : "0",
  date: date ? date : moment().format(),
  index,
});
export const _delete_payment = ({ index }) => ({
  type: DELETE_PAYMENT,
  index,
});

export const add_payment = ({ name, quantity, date }) => (
  dispatch,
  getState
) => {
  dispatch(add_payment_action({ name, quantity, date }));
  dispatch(_delete_actual_values());
};

export const edit_payment = ({ name, quantity, date, index }) => (
  dispatch,
  getState
) => {
  dispatch(_edit_payment({ name, quantity, date, index }));
  dispatch(_delete_actual_values());
};

export const delete_payment = ({ index }) => (dispatch, getState) => {
  index.map((i) => dispatch(_delete_payment({ index: i })));
};

export const set_actual_payment_value = ({ name, content }) => (
  dispatch,
  getState
) => {
  dispatch(_set_actual_payment_value({ name, content }));
};
