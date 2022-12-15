import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
    const [user, setUser] = useState({});

    const [events, setEvents] = useState({ 
      title:"",
      date:"",
      cost:""
      });
 

  return (
    <MainContext.Provider
      value={{user, setUser, events, setEvents}}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };