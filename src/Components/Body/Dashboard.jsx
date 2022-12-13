import React from 'react'

export const Dashboard = ({user,setUser}) => {

    const handleSignout = (e) => {
        setUser({});
      };

  return (
    <div>
         <div>
           <img src={user.picture} />
           <h3>{user.name}</h3>
         </div>
      <button onClick={(e) => handleSignout(e)}>Sign Out</button>
    </div>
  )
}
