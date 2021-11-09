import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { checkLogin } from "./utils/utils";
import Login from "./pages/Login";
import Popular from "./pages/Popular";
import ProtectedRoute from "./components/ProtectedRoute";
import Complete from "./pages/Complete";
import Basket from "./pages/Basket";
import Success from "./pages/Success";

function App() {
  const logged = checkLogin();
  return (
    <Switch>
      <Route exact path={"/login"} render={() => <Login />} />

      <Route
        exact
        path={"/popular"}
        render={() => (
          <ProtectedRoute>
            <Popular />
          </ProtectedRoute>
        )}
      />
      <Route exact path={"/checkout"} render={() => <Complete />} />
      <Route exact path={"/success"} render={() => <Success />} />
      <Route
        exact
        path={"/basket"}
        render={() => (
          <ProtectedRoute>
            <Basket />
          </ProtectedRoute>
        )}
      />
      {!logged ? <Redirect push to="/login" /> : <Redirect to="/popular" />}
    </Switch>
  );
}

export default App;
