import React from "react";
import { Link } from "react-router-dom";

import './hero.css'

export const Hero = () => {
  return (
    <div>
      <div class="hero_container">
        <div class="hero_sub_container overlay">
          <div class="hero_title flex">
            <div>
              <h1>Welcome to Web Dev Journey</h1>
            </div>
            <div>
              <h2>Get Started</h2>
            </div>
            <div>
            <Link to="/signin">
              <button className="hero_btn">Sign In</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
