import React from "react";
import AZ from "../../Images/Grand_Canyon.jpg";
import LB from "../../Images/Long Beach.jpg";
import RN from "../../Images/reno.jpg";
import LA from "../../Images/Los Angeles.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Nicolai Pitroff's Portfolio</h1>
      <div class="row">
        <div class="column">
          <img alt="Grand Canyon" src={AZ}></img>
          <img alt="Long Beach" src={LB}></img>
          <img alt="Reno" src={RN}></img>
          <img alt="Los Angeles" src={LA}></img>
        </div>
      </div>
    </nav>
  );
}

export default Header;
