import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

import "./header.css";

export const Header = () => {
  const { isLoggedin } = useContext(MainContext);

  return (
    <header class="header flex">
      <nav className="nav_list flex">
        <Link to="/">Home</Link>
        <Link to="">Programs</Link>
        <Link to="">About</Link>
        <Link to="">Blog</Link>
      </nav>
      <h1>
        <Link to="">
          Logo<span>Here</span>
        </Link>
      </h1>
      <div>
        {!isLoggedin && (
          <Link to="/signin">
            <button className="btn sign_In">Sign In</button>
          </Link>
        )}
      </div>
      <Outlet />
    </header>
  );
};
