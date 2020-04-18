import { SET_ACTUAL_ROUTE, DELETE_ACTUAL_ROUTE } from "../../utils/constants";

const route = (state = "GENA", action) => {
  switch (action.type) {
    case SET_ACTUAL_ROUTE:
      return action.route;
    case DELETE_ACTUAL_ROUTE:
      return null;
    default:
      return state;
  }
};

export { route };
