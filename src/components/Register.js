import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Home/Navbar";

class Register extends Component {
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
            <h1>Zarejestruj się </h1>
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
              <label htmlFor="password">
                Powtórz hasło
                <input type="password" name="password" id="password" />
              </label>
            </form>
          </div>
          <div className="login-btns">
            <Link to="/login">Zaloguj się</Link>
            <Link to="/register">Załóż konto</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
