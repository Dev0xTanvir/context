import React from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import PribateRoute from "./Routs/PribateRoute";
import LogedRoute from "./Routs/LogedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PribateRoute />}>
            <Route path="/" element={<Signup />} />
          </Route>
          <Route element={<LogedRoute/>}>
            <Route path="/singin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
