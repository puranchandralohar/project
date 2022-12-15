import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
    const [user, setUser] = useState({});

    const [events, setEvents] = useState({ 
      title:"",
      date:"",
      cost:""
      });

    const [allEvents,setAllevents] = useState([])
 

  return (
    <MainContext.Provider
      value={{user, setUser, events, setEvents, allEvents, setAllevents}}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };