import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/userSlice";

function Login() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: "Ben", age: 22, email: "ben@b.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </>
  );
}

export default Login;
