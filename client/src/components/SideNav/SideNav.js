import React from "react";

import "./SideNav.css";
import Logout from "../Logout";

const sideNav = props => (
    // let navClasses = "side-nav"
    // if (props.show) {
    //     navClasses = "side-nav open";
    // }
    // return (
    <nav className="side-nav" >
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Inbox</a></li>
            <li><a href="/">Profile</a></li>
            <Logout />
        </ul>
    </nav>
);


export default sideNav;
