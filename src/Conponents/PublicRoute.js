import React from "react";
import { Navigate,  } from "react-router";
import {  useApp } from "../Contex/AppContext";

const PublicRoute = ({ children }) => {
  const { user } = useApp();
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;
