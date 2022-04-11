import React, { Component } from "react";
import { Link } from "react-router-dom";

class Steps extends Component {
  render() {
    return (
      <div id="section3" className="step-section">
        <div className="step-section__title">Wystarczą 4 proste kroki</div>
        <span className="step-section__deco"></span>
        <div className="step-section__icons">
          {/* pojedynczy box */}
          <div className="icon-box">
            <div className="icon-box__icon"></div>
            <div className="icon-box__title">Wybierz rzeczy</div>
            <div className="icon-box__text">ubrania, zabawki, sprzęt i inne</div>
          </div>
          {/* konieć pojedynczego boxu */}
          {/* pojedynczy box */}
          <div className="icon-box">
            <div className="icon-box__icon"></div>
            <div className="icon-box__title">Spakuj je</div>
            <div className="icon-box__text">skorzystaj z worków na śmieci</div>
          </div>
          {/* konieć pojedynczego boxu */}
          {/* pojedynczy box */}
          <div className="icon-box">
            <div className="icon-box__icon"></div>
            <div className="icon-box__title">Zdecyduj komu chcesz pomóc</div>
            <div className="icon-box__text">wybierz zaufane miejsce</div>
          </div>
          {/* konieć pojedynczego boxu */}
          {/* pojedynczy box */}
          <div className="icon-box">
            <div className="icon-box__icon"></div>
            <div className="icon-box__title">Zamów kuriera</div>
            <div className="icon-box__text">kurier przyjedzie w dogodnym terminie</div>
          </div>
          {/* konieć pojedynczego boxu */}
        </div>
        <div className="step-btn">
          <Link to="/login">
            Oddaj <br /> rzeczy
          </Link>
        </div>
      </div>
    );
  }
}

export default Steps;
