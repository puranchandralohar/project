import { useState } from "react";
import React, { useContext } from "react";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import { MainContext } from "../../Context/MainContext";

import "./signinform.css";

export const SignIn = () => {
  const { usertype, setUsertype } = useContext(MainContext);

  console.log("usertpe==", usertype);

  return (
    <main className="container flex">
      <section className="login_container flex">
        <section className="login">
          <form className="input_group flex">
            <h1>Sign In</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email Id"
            />
            <input
              type="password"
              name="password"
              id="psw"
              placeholder="Password"
            />
            <p>Forget Your Password ?</p>
            <button type="submit" className="btn submit-btn">
              Sign In
            </button>
            <p>Or</p>
            <div className="user_container flex">
              <label for="usertype">Who are You:</label>
              <select
                name="user"
                id="usertype"
                value={usertype}
                onChange={(e) => setUsertype(e.target.value)}
              >
                <option value="" selected disabled>
                  Select Here
                </option>
                <option value="Student">Student</option>
                <option value="Traineer">Traineer</option>
              </select>
            </div>
            <GoogleSignIn />
          </form>
        </section>
        <section className="login_info flex">
          <h1>Welcome Back</h1>
          <p>Enter Your Credentials to login</p>
          <p>New Here</p>
          <button className="btn signup">Sign Up</button>
        </section>
      </section>
    </main>
  );
};
