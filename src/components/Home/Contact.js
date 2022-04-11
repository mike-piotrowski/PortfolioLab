import React, { Component } from "react";

import Footer from "./Footer";
import FieldLevelValidationExample from "./Form";

class Contact extends Component {
  render() {
    return (
      <div id="section6" className="section-contact">
        <div className="contact-box">
          <div className="section-contact__title">O nas</div>
          <div className="section-contact__deco"></div>
          <div className="section-contact__form">
            {/* <form>
                <div className="form-personal-data">
                <label>
                  Wpisz swoje imię:
                  <input type="text" name="name" placeholder="Krzysztof" className="input" />
                </label>
                <label>
                  Wpisz swój email:
                  <input type="email" name="" id="" placeholder="abc@xyz.pl" className="input"/>
                </label>
                </div>
                <div className="form-text">
                  <label>
                  Wpisz swoją wiadomość:
                  <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." className="input input-text"/>
                </label>
                </div>
                
                <input type="submit" value="Wyślij" className="form-btn" />
              </form> */}

            <FieldLevelValidationExample />
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Contact;
