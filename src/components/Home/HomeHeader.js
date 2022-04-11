import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header" id="section1">
          <div className="header-content">
            <div className="header-logs">
              <Link to="/login">Zaloguj się</Link>
              <Link to="/register">Zarejestruj się</Link>
            </div>
            <div className="header-nav">
              <Navbar />
            </div>
          </div>

          <div className="header-text">
            <div className="header-title">
              Zacznij pomagać!
              <br /> Oddaj niechciane rzeczy w zaufane ręce
            </div>
            <span className="header-decoration"></span>
            <div className="header-links">
              <Link to="/login">
                Oddaj <br /> rzeczy
              </Link>
              <Link to="/register">
                Zorganizuj <br /> zbiórkę
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
