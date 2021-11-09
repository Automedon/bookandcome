import React from "react";
import { Redirect } from "react-router-dom";
import { checkLogin } from "../utils/utils";

const ProtectedRoute = ({ children }) => {
  const logged = checkLogin();
  if (!logged) {
    return <Redirect to="login" />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
