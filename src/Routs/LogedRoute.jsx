import React from "react";
import { useContext } from "react";
import { Logincontext } from "../Context/Logincontext";
import { Navigate, Outlet } from "react-router";

const LogedRoute = () => {
  const { user } = useContext(Logincontext);

  return  user == 0 ? <Navigate to={"/singin"} /> : <Outlet />
   
};

export default LogedRoute;
