import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "#4d4d4d"};
`;

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Wymagane";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Podany email jest nieprawidłowy!";
  }
  console.log(value);
  return error;
}

function validateUsername(value) {
  let error;
  if (value === "admin") {
    error = "Nice try!";
  }
  if (!value) {
    error = "Podane imię jest nieprawidłowe!";
  }
  console.log(value);
  return error;
}

function validationTextarea(value) {
  let error;
  console.log(value.length);
  if (value.length < 10) {
    error = "Wiadomość musi mieć conajmniej 120 znaków!";
  }
  console.log(value);
  return error;
}
// const FieldLevelValidationExample = () => (

class FieldLevelValidationExample extends Component {
  state = {
    sendSuccess: false,
  };

  render() {
    const { sendSuccess } = this.state;
    return (
      <div>
        {sendSuccess && (
          <h1 className="form-send__success">
            Wiadomość została wysłana! Wkrótce się skontaktujemy.{" "}
          </h1>
        )}
        <Formik
          initialValues={{
            username: "",
            email: "",
            textarea: "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            const that = this;
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: values.email,
                name: values.username,
                message: values.textarea,
              }),
            })
              .then(function (data) {
                that.setState({
                  sendSuccess: true,
                });
                console.log("Request success: ", data);
              })
              .catch(function (error) {
                console.log("Request failure: ", error);
              });
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <div className="form-personal-data">
                <label>
                  Wpisz swoje imię:
                  <Field
                    name="username"
                    borderBottom={errors.username && "1px solid red"}
                    validate={validateUsername}
                    className="input"
                    placeholder="Krzysztof"
                  />
                  {errors.username && touched.username && (
                    <Text color="red">{errors.username}</Text>
                  )}
                </label>
                <label>
                  Wpisz swój email:
                  <Field
                    name="email"
                    borderBottom={errors.email && "1px solid red"}
                    validate={validateEmail}
                    className="input"
                    placeholder="abc@xyz.pl"
                  />
                  {errors.email && touched.email && <Text color="red">{errors.email}</Text>}
                </label>
              </div>
              <div className="form-text">
                <label>
                  Wpisz swoją wiadomość:
                  <Field
                    name="textarea"
                    validate={validationTextarea}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    className="input form-text"
                  />
                  {errors.textarea && touched.textarea && (
                    <Text color="red">{errors.textarea}</Text>
                  )}
                </label>
              </div>
              <button type="submit" className="form-btn">
                Wyślij
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
// );

export default FieldLevelValidationExample;
