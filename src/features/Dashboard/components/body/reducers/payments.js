import {
  ADD_PAYMENT,
  DELETE_PAYMENT,
  EDIT_PAYMENT,
  SET_FIELD,
  DELETE_FIELD,
  DELETE_ALL,
} from "../../../../../utils/constants";
import { combineReducers } from "redux";

const payments = (state = [], action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return [
        ...state,
        { name: action.name, quantity: action.quantity, date: action.date },
      ];
    case DELETE_PAYMENT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case EDIT_PAYMENT:
      return [
        ...state.slice(0, action.index),
        { name: action.name, quantity: action.quantity, date: action.date },
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

const set_field = (name) => {
  return (state = "", action) => {
    if (action.type == DELETE_ALL) {
      return null;
    }
    if (action.name != name) {
      return state;
    }
    switch (action.type) {
      case SET_FIELD:
        return action.content;
      case DELETE_FIELD:
        return null;
      default:
        return state;
    }
  };
};

const actual_payment = combineReducers({
  name: set_field("name"),
  quantity: set_field("quantity"),
  date: set_field("date"),
  editing: set_field("editing"),
});

export default combineReducers({
  payments,
  actual_payment,
});
