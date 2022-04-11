import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Login from "./components/Login";
import Register from "./components/Register";

import "../src/scss/main.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
