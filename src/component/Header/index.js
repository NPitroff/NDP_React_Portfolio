import React from "react";

// 

import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="home">
      <h1>Nicolai Pitroff's Portfolio</h1>
      <nav id="navbar">
        {/* Linked In */}
        <a href="https://www.linkedin.com/in/nicolaipitroff">
          <img
            src="https://image.flaticon.com/icons/svg/174/174857.svg"
            alt="My Linked In"
            id="myLink"
          />
        </a>
        {/* Github */}
        <a href="https://github.com/NPitroff" id="myGit">
          <img
            src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
            alt="My Github"
            id="myGit"
          />
        </a>
        {/* Links for Home, Biography, Contact  */}
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* Contact Link */}
          <Link
              to="/contact"
              className={
                window.location.pathname === "/" || window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          {/* GitRepo */}
          <li className="nav-item">
            {/* Contact Link */}
          <Link
              to="/gitrepo"
              className={
                window.location.pathname === "/" || window.location.pathname === "/gitrepo"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My projects
            </Link>
          </li>
          {/* Home */}
          <li className="nav-item">
            {/* Contact Link */}
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
