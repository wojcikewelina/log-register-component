import React, { Component } from "react";

const API_URL =
  "https://us-central1-itfighters-hero.cloudfunctions.net/api/hero";

export default class LogRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "your not logged in"
    };
  }

  clearRegisterPasword = () => {
    event.target.userName.value = "";
    event.target.userEmail.value = "";
    event.target.userPassword.value = "";
    event.target.userPasswordToConfirm.value = "";
  };

  handleLogInSubmit = event => {
    event.preventDefault();
       
       //wysłać dane na serwer przy pomocy get (login i hasło) i na serwerze pobieram usera z danych i sprawdzam czy login i hasło sa poprawne
       


  };

  

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
      console.log(passwordToConfirm + " " + event.target.userEmail.value);
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          superhero: "Email " + event.target.userEmail.value,
          publisher: "Hasło " + password,
          firstAppearance: event.target.userName.value,
          characters: "",
          url: ""
        })
      })
        .then(resp => {
          if (resp.status === 201) {
            alert("You have been registered!");
          } else {
            alert("Rejestracja nie powiodła się");
            console.log(resp.status);
          }
        })
        .catch(err => console.warn("nie działa", err));
      this.clearRegisterPasword();
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
          <input type="text" placeholder="Name" id="userName" />
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
