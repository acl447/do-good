import React from "react";

import "./NavButton.css";

const navToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    </button>
);

export default navToggleButton;