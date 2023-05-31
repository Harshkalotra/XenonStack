import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Index() {
  const navigate=useNavigate();

  return (
    <>
      <div className="hsh">
        <h1 className="head">Welcome to PhonePlanet</h1>
       <marquee  direction="right" behavior="alternate" ><h2>Elevate your mobile lifestyle</h2></marquee>
       
      </div>
      <form>
        <div className="headingsContainer">
          <br />
          <br />
          <h3 className="head">Sign in!!!</h3>
        </div>

        <div className="mainContainer">
          <label htmlFor="user">Your email</label>
          <input
            type="text"
            placeholder="Please enter a valid email address"
            name="user"
            required
          />

          <br />

          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            placeholder="Enter a valid password"
            name="password"
            required
          />

          <br />
          <br />
          <br />
          <button onClick={()=>navigate("/home")}>Login</button>

          <p className="register">
            Not a member? <Link to="/registration">Register here!</Link>
          </p>
        </div>
      </form>
    </>
  );
}