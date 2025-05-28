import React, { useContext } from "react";
import { Logincontext } from "../Context/Logincontext";
import { Navigate, Outlet } from "react-router";

const PribateRoute = () => {
  const { user } = useContext(Logincontext);
  
  return  user == 0 ? <Navigate to = {"/"} /> : <Outlet />
    
};

export default PribateRoute;
