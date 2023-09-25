import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import { RequiredAuth } from "./SecureRoute";
import Home from "../pages/Home";
import Loading from "./Loading";
import Profile from "../pages/Profile";
import Roles from "pages/Roles";
import Error from "./Error";
import Users from "pages/Users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="login/callback"
        element={<LoginCallback loadingElement={<Loading />} />}
      />
      <Route path="error" element={<Error />} />
      <Route path="/profile" element={<RequiredAuth />}>
        <Route path="" element={<Profile />} />
      </Route>
      <Route path="/roles" element={<RequiredAuth />}>
        <Route path="" element={<Roles />} />
      </Route>
      <Route path="/users" element={<RequiredAuth />}>
        <Route path="" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
