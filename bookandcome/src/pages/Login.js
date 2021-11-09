import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { Spin } from "antd";
import { fetchToken } from "../api";
import { checkLogin } from "../utils/utils";

const Login = () => {
  const history = useHistory();
  const { mutate, isLoading, isError } = useMutation(`login`, fetchToken);
  useEffect(() => {
    const logged = checkLogin();
    if (logged) {
      return history.push("/popular");
    }
  }, [history, isLoading]);

  return (
    <div>
      <div>
        {isLoading && (
          <Spin tip="Loading...">
            <button disabled={isLoading} onClick={mutate}>
              Login
            </button>
          </Spin>
        )}

        {!isLoading && (
          <button disabled={isLoading} onClick={mutate}>
            Login
          </button>
        )}

        {isError && <div>Request failed</div>}
      </div>
    </div>
  );
};

export default Login;
