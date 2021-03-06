import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import firebase from "../firebase";
import ShowPassword from "../ShowPassword";

class TeacherLogin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const nam = e.target.name,
      val = e.target.value;
    this.setState({
      [nam]: val,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const classList = e.target.classList;
    classList.add("loading");
    const email = this.state.email,
      pass = this.state.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        if (user.user.displayName === "teacher") {
          classList.remove("loading");
          M.toast({
            html: "Logged In Successfully",
            classes: "toast success-toast",
          });
          window.location.pathname = "/teacher";
        } else {
          classList.remove("loading");
          M.toast({
            html: "Invalid Email/Password",
            classes: "toast error-toast",
          });
        }
      })
      .catch((err) => {
        if (
          err.message ===
          "The password is invalid or the user does not have a password."
        ) {
          classList.remove("loading");
          M.toast({
            html: "Invalid Email/Password",
            classes: "toast error-toast",
          });
        }
      });
  };

  render() {
    return <div>{this.form()}</div>;
  }

  form = () => {
    return (
      <div className="main-container">
        <div className="container-login mx-auto">
          <div className="con-login">
            <h1>Log In</h1>
            <form onSubmit={this.handleLogin} style={{ width: "100%" }}>
              <div className="con-inputs mt-4">
                <div className="con-input">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="email@example.com"
                    id="email"
                    name="email"
                    value={this.state.email}
                    type="text"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="con-input">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    type="password"
                    onChange={this.handleChange}
                    required
                  />
                  <ShowPassword />
                </div>
                <div className="con-new">
                  New here? <Link to="/newteacher">Sign Up</Link>
                </div>
              </div>
              <footer>
                <button type="submit" className="btn-login">
                  Log In
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default TeacherLogin;
