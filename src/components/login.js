import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Home/Navbar";

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
            <h1>Zaloguj się</h1>
          </div>
          <div className="deco"></div>
          <div className="login-form">
            <form action="">
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="password">
                Hasło
                <input type="password" name="password" id="password" />
              </label>
            </form>
          </div>
          <div className="login-btns">
            <Link to="/register">Zarejestruj się</Link>
            <Link to="/login">Zaloguj się</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
