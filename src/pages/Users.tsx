import React, { useEffect, useState } from "react";
import UserService from "services/UserServices";

const Users = () => {
  const [showForBiddenMsg, setShowForBiddenMsg] = useState(false);
  useEffect(() => {
    UserService.getUsersList().then(
      (_response) => {
        console.log(_response);
      },
      (error) => {
        console.log(error);
        if (error.response.status === 403) {
          setShowForBiddenMsg(true);
        }
      }
    );
  }, []);

  return (
    <>
      {" "}
      <div className="">
        {showForBiddenMsg ? (
          <div className="text-center">
            <h1>Error - Unautherized.</h1>
            <p>
              You do not have permissions to access page you are trying to
              access.
            </p>
          </div>
        ) : (
          <h1 className="text-center">you are allowed to see users list.</h1>
        )}
      </div>
    </>
  );
};

export default Users;
