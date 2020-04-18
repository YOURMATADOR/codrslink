import React from "react";
import logo from "./logo.svg";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import Dashboard from "./features/Dashboard/container";
import { TopBar } from "./components/TopBar";
import Landing from "./features/Landing/container";
import { _createStore, history } from "./state/store";
import Payment from "./features/Payment/container";

const { store, persistor } = _createStore();
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/payment" component={Payment} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
