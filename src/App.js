import React from "react";
import { Switch, Route } from "react-router-dom";
import { checkLogin } from "./utils/utils";
import Login from "./pages/Login";
import Popular from "./pages/Popular";

function App() {
  const logged = checkLogin();
  return (
    <Switch>
      <Route exact path={"/login"} render={() => <Login logged={logged} />} />
      <Route exact path={"/popular"} render={() => <Popular />} />
    </Switch>
  );
}

export default App;
