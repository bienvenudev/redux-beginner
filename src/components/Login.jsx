import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  return (
    <div>
      <button
        style={{ color: theme }}
        onClick={() => {
          dispatch(login({ name: "Ben", age: 22, email: "ben@b.com" }));
        }}
      >
        Login
      </button>

      <button
        style={{ color: theme }}
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
