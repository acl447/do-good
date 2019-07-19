import React from "react";

function NavTabs(props) {
 return (
   <ul className="nav nav-tabs">
     <li className="nav-item">
       <a
         href="/about"
         onClick={() => props.handlePageChange("About")}
         className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
       >
         About
       </a>
     </li>
     <li className="nav-item">
       <a
         href="#inbox"
         onClick={() => props.handlePageChange("Inbox")}
         className={props.currentPage === "Inbox" ? "nav-link active" : "nav-link"}
       >
         Inbox
       </a>
     </li>

   </ul>
 );
}

export default NavTabs;