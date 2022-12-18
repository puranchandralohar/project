import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

import toast, { Toaster } from 'react-hot-toast';

import "./users.css";

export const Users = () => {
  const [items, setItems] = useState([]);

  const {user, setUser, maxStudents, setMaxstudents } = useContext(MainContext);

  const navigate = useNavigate();

  const redirect = useNavigate();

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

  const notify = ((e) =>  {
    console.log(e.target.id)
    if(maxStudents < 5){
      setMaxstudents(maxStudents + 1)
      toast.success('Congratulations!!..Your Session is Booked');
    }
    else{
      toast.error('Sorry..Session is Full, Try Next Time');
    }
  });


useEffect(() => {
  localStorage.setItem('students', JSON.stringify(maxStudents));
}, [maxStudents]);

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
            {items.map(({ title, date, cost}) => {
              return (
                <tr>
                  <td>{title}</td>
                  <td>{date}</td>
                  <td>{cost}</td>
                  <td>{maxStudents}/5</td>
                  <td>
                    {
                      maxStudents >=5 ? <button className="btn cta_full" onClick={(e)=>notify(e)}>Full</button> :
                      <button className="btn cta_avl" onClick={notify}>Available</button>
                    }             
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
