import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "localforage"; // defaults to localStorage for web
import thunk from "redux-thunk";

import payments from "../features/Dashboard/components/body/reducers/payments";
import { route } from "./reducers/Route";

const persistConfig = {
  key: "root",
  storage,
};

const createReduxHistory = (customHistory) =>
  combineReducers({
    route,
    payments,
    router: connectRouter(customHistory),
  });

export const history = createBrowserHistory();
const persistedReducer = persistReducer(
  persistConfig,
  createReduxHistory(history)
);

let composeEnharcer = compose;

composeEnharcer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const _createStore = () => {
  let store = createStore(
    persistedReducer,
    composeEnharcer(applyMiddleware(routerMiddleware(history), thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
