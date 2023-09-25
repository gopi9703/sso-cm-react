import React, { useEffect, useState } from "react";
import AuthService from "services/AuthService";
import { useOktaAuth } from "@okta/okta-react";
import TokenService from "services/TokenService";
import RolesService from "services/RolesService";

const Roles = () => {
  const { authState }: any = useOktaAuth();
  const [showForBiddenMsg, setShowForBiddenMsg] = useState(false);

  // const isAuthenticated =
  //   !authState || !authState.isAuthenticated ? null : authState.idToken.claims;

  useEffect(() => {
    getRoleTypes();
    // AuthService.checkUserExistViaEmail(
    //   isAuthenticated?.preferred_username.toLowerCase()
    // ).then(
    //   (_response) => {
    //     TokenService.setUser(_response);
    //     getRoleTypes();
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
      ) : null}
    </>
  );
};

export default Roles;
