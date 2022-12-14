import React, { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
  const [user, setUser] = useState({});

  const [events, setEvents] = useState({
    title: "",
    date: "",
    cost: "",
  });

  const [allEvents, setAllevents] = useState([]);

  const [usertype, setUsertype] = useState();

  const[isLoggedin, setIsLoggedIn] = useState(false)

  const [maxStudents, setMaxstudents] = useState({})

  const [link, setLink] = useState('');


  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        events,
        setEvents,
        allEvents,
        setAllevents,
        usertype,
        setUsertype,
        isLoggedin,
        setIsLoggedIn,
        maxStudents,
        setMaxstudents,
        link,
        setLink
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export { MainContext, MainStateProvider };
