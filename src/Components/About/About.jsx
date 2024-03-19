import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const Links1 = useNavigate();
  function func2() {
    Links1("/");
  }

  const location2 = useLocation();
  return (
    <>
      <Navbar />
      <div id="About-1">
        <div id="About-2">
          <p>Hey, you are on a About Page...</p>
        </div>
        <button onClick={func2}>Go to Home Page</button>
        <p>Your Current Url is {location2.pathname.replace("/", "")} </p>
      </div>
    </>
  );
}

export default About;
