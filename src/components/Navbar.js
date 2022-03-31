import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Demo from "./Demo";

function Navbar({ showSidebar, sidebar }) {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
        </div>
        <Demo sidebar={sidebar} showSidebar={showSidebar} />
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
