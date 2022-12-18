import React, { useState, useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { MainContext } from "../../Context/MainContext";
import Swal from "sweetalert2";

import "./calender.css";

const Calender = () => {
  const [totalStudents, setTotalStudents] = useState();
  const { events, allEvents, link } = useContext(MainContext);

  useEffect(() => {
    let numbers = JSON.parse(localStorage.getItem("students"));
    setTotalStudents(numbers);
  }, []);

  return (
    <>
      <p className="info">[Click on The Events to see Details]</p>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        // Open Model

        eventClick={function (arg) {
          Swal.fire({
            title: `Class-${events.title}`,
            html: `<div>Date-${events.date} </div> <div>Students-${
              totalStudents[events.title]
            }</div> <div> Cost-${
              events.cost
            }</div> <div>Class Link-${link}</div>`,
            type: "success",
          });
        }}
        events={allEvents}
      />
    </>
  );
};

export default Calender;
