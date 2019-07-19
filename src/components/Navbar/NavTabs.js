import React from "react";

import NavToggleButton from "../SideNav/NavButton";
import "./NavTabs.css";
import Logout from "../Logout";

const navTabs = props => (
<header className="header">
  <nav className="nav_bar">
    <div className="navbar_toggle-button">
    {/* click={props.navClickHandler} need to go into NavToggleButton? */}
      <NavToggleButton />
    </div>
    <div className="nav_logo"><a href="/">Do Good</a></div>
    <div className="spacer" />
    <div className="nav_items">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Inbox</a></li>
        <li><a href="/">Profile</a></li>
       <Logout />
      </ul>
    </div>
  </nav>

</header>

);

// function NavTabs(props) {
//  return (
//    <ul className="nav nav-tabs">
//      <li className="nav-item">
//        <a
//          href="/about"
//          onClick={() => props.handlePageChange("About")}
//          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
//        >
//          About
//        </a>
//      </li>
//      <li className="nav-item">
//        <a
//          href="#inbox"
//          onClick={() => props.handlePageChange("Inbox")}
//          className={props.currentPage === "Inbox" ? "nav-link active" : "nav-link"}
//        >
//          Inbox
//        </a>
//      </li>

//    </ul>
//  );
// }

export default navTabs;