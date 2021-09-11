import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchToken } from "../api";

export default ({ logged }) => {
  const history = useHistory();
  useEffect(() => {
    console.log(logged);
    if (logged) {
      return history.push("/popular");
    }
  }, [logged, history]);

  return (
    <div>
      <div>
        <button onClick={fetchToken}>Login</button>
      </div>
    </div>
  );
};
