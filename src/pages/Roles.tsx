import React, { useEffect, useState } from "react";
import RolesService from "services/RolesService";

const Roles = () => {
  const [showForBiddenMsg, setShowForBiddenMsg] = useState<boolean>(false);

  useEffect(() => {
    getRoleTypes();
  }, []);

  const getRoleTypes = () => {
    RolesService.getRoles().then(
      (_response) => {},
      (error) => {
        console.log(error);
        if (error.response.status === 403) {
          setShowForBiddenMsg(true);
        }
      }
    );
  };

  return (
    <>
      {showForBiddenMsg ? (
        <div className="text-center">
          <h1>Error - Unautherized.</h1>
          <p>
            You do not have permissions to access page you are trying to access.
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h1>You are allowed to access roles.</h1>
        </div>
      )}
    </>
  );
};

export default Roles;
