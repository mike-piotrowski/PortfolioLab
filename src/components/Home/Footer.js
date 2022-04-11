import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="footer-section__copy">Copyright by Coders Lab</div>

        <div className="footer-section__icons">
          <div className="icons icons-facebook"></div>
          <div className="icons icons-instagram"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
