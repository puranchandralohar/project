import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
    </div>
  )
}
