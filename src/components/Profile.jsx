import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value); //! why on this part, I don't have state.user.value??

  console.log("userState", user);

  return (
    <>
      <h1>Profile </h1>
      <div>Name: {user.name}</div>
      <div>Age: {user.age} </div>
      <div>Email: {user.email}</div>
    </>
  );
}

export default Profile;
