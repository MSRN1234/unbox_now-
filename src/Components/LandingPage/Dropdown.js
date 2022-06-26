import React from "react";
// import { Dropdown } from 'react-dropdown';
import "react-dropdown/style.css";
import { NavDropdown } from "react-bootstrap";

export default function Dropdown() {
  return (
    <NavDropdown
      id="dropdown-basic-button"
      className="dropup"
      title={<span style={{ color: "black" }}>Categories</span>}
    >
      <div id="dropdown-menu">
        <dropdownMenu href="#/action-1" title="Gifts for New joinee">
          New Joinee
        </dropdownMenu>
        <dropdownMenu href="#/action-1">Anniversary</dropdownMenu>
        <dropdownMenu href="#/action-1" title="Gifts for Special Ocasions">
          Occasion-based
        </dropdownMenu>
        <dropdownMenu href="#/action-1" title="Gifts for Festivals">
          festive
        </dropdownMenu>
        <dropdownMenu href="#/action-1">General</dropdownMenu>
        <dropdownMenu href="#/action-1">Eco-Friendly</dropdownMenu>
      </div>
    </NavDropdown>
  );
}
