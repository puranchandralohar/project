import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

export const Hero = () => {
  return (
    <div>
      <div class="hero_container">
        <div class="hero_sub_container overlay">
          <div class="hero_title flex">
            <div>
              <h1>Welcome to Web Development Journey</h1>
            </div>
            <div>
              <h3>Build Your Career with us, Level up your skills, Start for Free</h3>
            </div>
            <div className="buttons_group flex">
            <Link to="/signin">
                <button className="hero_btn gt_btn">Get Started</button>
              </Link>
              <Link to="/signin">
                <button className="hero_btn sign_btn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
