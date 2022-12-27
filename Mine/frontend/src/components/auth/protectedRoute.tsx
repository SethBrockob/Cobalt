import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "./authContext";

export const ProtectedRoute = () => {
  const ctx = useContext(AuthContext);

  return ctx!.authentication ? <Outlet /> : <Navigate to="/" />;
};
