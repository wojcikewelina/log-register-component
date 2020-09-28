import React, { Component } from "react";

export default class LogRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status : "your not logged in",
    }
  }

  clearRegisterPasword = () => {
    event.target.userPassword.value = "";
    event.target.userPasswordToConfirm.value = "";
  };

  handleLogInSubmit = event => {
    event.preventDefault();
    this.logInUser(
      event.target.userEmail.value,
      event.target.userPassword.value
    );
  };

  logInUser(email, password) {}

  handleRegisterSubmit = event => {
    event.preventDefault();
    let password = event.target.userPassword.value;
    let passwordToConfirm = event.target.userPasswordToConfirm.value;

    if (password !== passwordToConfirm) {
      alert("Passwords are not the same!");
      this.clearRegisterPasword();
    } else if (password.length < 6) {
      alert("Password must have at least 6 letters");
      this.clearRegisterPasword();
    } else {
      console.log("you have been registered");
    }
  };

  render() {
    return (
      <section>
        <div>Status: {this.state.status}</div>
        <form onSubmit={this.handleLogInSubmit}>
          <input type="text" placeholder="Email" id="userEmail" />
          <input type="password" placeholder="Password" id="userPassword" />
          <button>Log in</button>
        </form>
        <form onSubmit={this.handleRegisterSubmit}>
          <input type="text" placeholder="Email" id="userEmail" />
          <input type="password" placeholder="Password" id="userPassword" />
          <input
            type="password"
            placeholder="Confirm password"
            id="userPasswordToConfirm"
          />
          <button>Register</button>
        </form>
      </section>
    );
  }
}
