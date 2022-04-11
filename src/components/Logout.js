import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Home/Navbar";

class Login extends Component {
  render() {
    return (
      <>
        <div className="header-content">
          <div className="header-logs">
            <Link to="/login">Zaloguj się</Link>
            <Link to="/register">Zarejestruj się</Link>
          </div>
          <div className="header-nav">
            <Navbar />
          </div>
        </div>

        {/*  Koniec górnej sekcji z nawigacją */}

        <div className="login-box">
          <div className="login-title">
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
          </div>
          <div className="deco"></div>
          <div>
            <Link to="/">Strona główna</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
