import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  const Links1 = useNavigate();
  function func1() {
    Links1("/about");
  }

  const location1 = useLocation();
  return (
    <>
      <Navbar />
      <div id="Home-1">
        <div id="Home-2">
          <p>Hey, you are on a Home Page...</p>
        </div>
        <button onClick={func1}>Go to About Page</button>
        <p>Your Current Url is {location1.pathname.replace("/", "Home")}</p>
      </div>
    </>
  );
}

export default Home;
