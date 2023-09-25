import React, { useEffect } from "react";
import UserService from "services/UserServices";

const Users = () => {
  useEffect(() => {
    UserService.getUsersList().then(
      (_response) => {
        console.log(_response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      {" "}
      <div className="">
        <h1>you are allowed to see users list.</h1>
      </div>
    </>
  );
};

export default Users;
