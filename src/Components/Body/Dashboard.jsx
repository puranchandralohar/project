import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Calender from "./Calender";
import Link from "./Link";
import { MainContext } from "../../Context/MainContext";

import "./dashboard.css";

export const Dashboard = () => {
  const { user, setUser, events, setEvents, allEvents, setAllevents } =
    useContext(MainContext);

  const navigate = useNavigate();

  const handleSignout = (e) => {
    setUser({});
    navigate("/signin");
  };

  const handleSelect = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setAllevents([...allEvents, events]);
    let saveData = JSON.parse(localStorage.getItem("events") || "[]");
    saveData.push(events);
    localStorage.setItem("events", JSON.stringify(saveData));
  };

  return (
    <div className="dashboard">
      <div className="dashboard_header flex">
        <h3>
          Welcome! <span className="user_name">{user.name}</span>
        </h3>
        <img src={user.picture} />
        <button className="btn signout" onClick={(e) => handleSignout(e)}>
          Sign Out
        </button>
      </div>
      <div className="flex">
        <div className="sidebar flex">
          <div className="sidebar_title">
            <h2>Setup Class</h2>
          </div>
          <div className="sidebar_tasks">
            <div className="input_elements">
              <label htmlFor="class_name">Class Name</label>
              <input
                type="text"
                name="title"
                id="class_name"
                onChange={handleSelect}
              />
            </div>

            <div className="input_elements">
              <label htmlFor="class_time">Timing</label>
              <input
                type="date"
                name="date"
                id="class_time"
                onChange={handleSelect}
              />
            </div>

            <div className="input_elements">
              <label htmlFor="class_cost">Cost</label>
              <input
                type="text"
                name="cost"
                id="class_cost"
                onChange={handleSelect}
              />
            </div>

            <div className="input_elements">
              <button className="btn setup_class" onClick={handleSubmit}>
                Shedule My Class
              </button>
            </div>
          </div>
          <Link />
        </div>
        <div className="main_calender">
          <Calender />
        </div>
      </div>
    </div>
  );
};
