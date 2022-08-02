import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class SignUpForm extends Form {
  state = {
    data: { username: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password"),
  };

  doSubmit = () => {
    // do this if form data is valid
    console.log("Sign up submitted");
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
        </form>
        {this.renderButton("Sign up")}
      </div>
    );
  }
}

export default SignUpForm;
