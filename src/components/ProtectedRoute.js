import React from "react";
import { useHistory } from "react-router-dom";

export default ({ children, logged }) => {
  const history = useHistory();
  if (!logged) {
    return history.push("/login");
  }

  return <div>{children}</div>;
};
