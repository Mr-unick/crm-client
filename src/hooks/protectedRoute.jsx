// ProtectedRoute.js
import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authhook";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const navigate=useNavigate()

  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Outlet {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
