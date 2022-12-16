import React, { useState, useEffect } from "react";

import "./users.css";

export const Users = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("events"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  return (
    <div className="user_container">
        <h2>Class Availablity</h2>
      <table>
        <thead>
          <tr>
            <td>Class</td>
            <td>Date</td>
            <td>Fee</td>
          </tr>
        </thead>
        <tbody>
          {items.map(({ title, date, cost }) => {
            return (
              <tr>
                <td>{title}</td>
                <td>{date}</td>
                <td>{cost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
