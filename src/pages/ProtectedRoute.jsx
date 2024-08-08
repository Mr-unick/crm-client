import { LoginContext } from "@/App";
import { useContext, useEffect, useState } from "react";
import { Dashboard } from "./dashBoard";
import { Navigate } from "react-router-dom";


export const Protected = () => {

    const [isAuth, setIsAuth] = useState(sessionStorage.getItem("user") !== null);

  


  return isAuth ? <Dashboard /> : <Navigate to={"/"} />;
};
