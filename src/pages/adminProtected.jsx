import { LoginContext } from "@/App";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



export const AdminRoutes = ({}) => {

  let admin = JSON.parse(sessionStorage.getItem("user"));

  return admin.level==="admin" ? <Outlet /> : <Navigate to={"/unauthorised-user"} />; // Redirect to unauthorized route
};

