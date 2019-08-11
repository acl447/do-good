import React from "react";

import { withRouter, Link } from 'react-router-dom';



// import NavToggleButton from "../SideNav/NavButton";
import "./NavTabs.css";
import Logout from "../Logout";


const NavTabs = props => (

  <header className="header">
    <nav className="nav_bar">
      {/* <div className="navbar_toggle-button">
        {/* click={props.navClickHandler} need to go into NavToggleButton? */}
        {/* <NavToggleButton /> */}
      {/* </div> */}
      <div className="nav_logo"><Link to="/" exact="true">Do Good</Link></div>
      <div className="spacer" />
      <div className="nav_items">
        <ul>
          <Link to="/home" className="px-2">Home</Link>
          {/* <Link to="/inbox" className="px-2">Inbox</Link> */}
          <Link to="/dashboard" className="px-2">Profile</Link>
          <Link to="/about" className="px-2">About</Link>
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


export default withRouter(NavTabs);

