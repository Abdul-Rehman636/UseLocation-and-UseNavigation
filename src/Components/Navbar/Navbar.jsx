import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div id="Nav-1">
      <div id="Nav-2">
        <NavLink id="Nav-Link">Home</NavLink>
        <NavLink id="Nav-Link">About</NavLink>
        <NavLink id="Nav-Link">Contact</NavLink>
        <NavLink id="Nav-Link">User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
