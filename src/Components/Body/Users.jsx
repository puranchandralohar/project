import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

import toast, { Toaster } from 'react-hot-toast';

import "./users.css";

export const Users = () => {
  const [items, setItems] = useState([]);

  const { user, setUser } = useContext(MainContext);

  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("events"));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleSignout = (e) => {
    setUser({});
    navigate("/signin");
  };

  console.log(items);

  const notify = () => toast.success('Congratulations!!..Your Session is Booked');

  return (
    <>
      <div className="dashboard_header flex">
        <h3>
          Welcome! <span className="user_name">{user.name}</span>
        </h3>
        <img src={user.picture} />
        <button className="btn signout" onClick={(e) => handleSignout(e)}>
          Sign Out
        </button>
      </div>
      <div className="user_container">
        <h2>Class Availablity</h2>
        <table>
          <thead>
            <tr>
              <td>Class</td>
              <td>Date</td>
              <td>Fee</td>
              <td>No of Students</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {items.map(({ title, date, cost }) => {
              return (
                <tr>
                  <td>{title}</td>
                  <td>{date}</td>
                  <td>{cost}</td>
                  <td>2/5</td>
                  <td><button className="btn cta_avl" onClick={notify}>Available</button>
                  <Toaster />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
