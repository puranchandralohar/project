import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
    const [user, setUser] = useState({});
 

  return (
    <MainContext.Provider
      value={{user, setUser}}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };