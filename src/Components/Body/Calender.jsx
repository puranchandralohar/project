import React from "react";
import { useContext } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { MainContext } from "../../Context/MainContext";

const Calender = () => {
  const { events, allEvents } = useContext(MainContext);

  // console.log("allEvents", allEvents);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        // events={[
        //   { title: 'event 1', date: '2022-12-01' },
        //   { title: 'event 2', date: '2022-12-02' }
        // ]}
        events={allEvents}
      />
    </>
  );
};

export default Calender;
