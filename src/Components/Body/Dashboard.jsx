
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Calender } from './Calender';

import { MainContext } from "../../Context/MainContext";

import "./dashboard.css"

export const Dashboard = () => {

  const {user,setUser} = useContext(MainContext)

  const navigate = useNavigate()

    const handleSignout = (e) => {
        setUser({});
        navigate("/signin")  
      };

  return (
    <div className='dashboard'>
         <div className='dashboard_header flex'>
           <h3>Welcome! <span className='user_name'>{user.name}</span></h3>
           <img src={user.picture} />
          <button className='btn signout' onClick={(e) => handleSignout(e)}>Sign Out</button>
         </div>
         <div className="sidebar">
            <div className="sidebar_title">
              <h2>Setup Class</h2>
            </div>
            <div className="sidebar_tasks">
              <div className="input_elements">
                <label htmlFor="class_name">Class Name</label>
                <input type="text" name="class_name" id="class_name" />
              </div>
            
              <div className="input_elements">
                <label htmlFor="class_time">Timing</label>
                <input type="date" name="class_time" id="class_time" />
              </div>

              <div className="input_elements">
                <label htmlFor="class_cost">Cost</label>
                <input type="text" name="class_cost" id="class_cost" value={0}/>
              </div>

              <div className="input_elements">
                <button className='btn setup_class'>Shedule My Class</button>
              </div>
              
            </div>
         </div>
         <Calender/>
    </div>
  )
}
