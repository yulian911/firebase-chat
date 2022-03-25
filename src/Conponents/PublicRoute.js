import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppContext, useApp } from "../Contex/AppContext";

const PublicRoute = ({ children }) => {
  const { user } = useApp();
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;
