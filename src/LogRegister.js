import React, { Component } from "react";

export default class LogRegister extends Component {
  render() {


    handleLogInSubmit=(event)=>{
      
    }

    return (
      <section>
        <div>Status</div>
        <form onSubmit={this.handleLogInSubmit}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Register</button>
        </form>
      </section>
    );
  }
}
