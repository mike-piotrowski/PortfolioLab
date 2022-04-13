import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const options = {
  smooth: "true",
  offset: 70,
  duration: 500,
};

class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/" {...options}>
                Start
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="section2" {...options}>
                O co chodzi?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section4" {...options}>
                O nas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section5" {...options}>
                Fundacja i organizacje
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section6" {...options}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
