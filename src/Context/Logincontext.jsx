import { createContext, useEffect, useState } from "react";

export const Logincontext = createContext();

export const Loginprovider = ({ children }) => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Logincontext.Provider value={{ user, setuser }}>
      {children}
    </Logincontext.Provider>
  );
};
