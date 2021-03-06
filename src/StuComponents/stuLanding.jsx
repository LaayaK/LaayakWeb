import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../firebase";
import Forbidden from "../forbidden/Forbidden";
import Loader from "../Loader/Loader";
import MainPage from "./mainPage";

class StuLanding extends Component {
  db = firebase.firestore();
  isMount = false;
  state = {
    email: "",
    access: false,
    loading: true
  };

  componentDidMount() {
    this.isMount = true;
    this.checkAuth();
  }

  UNSAFE_componentWillMount() {
    this.isMount = false;
  }

  checkAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (this.isMount) {
          this.setState({ email: user.email })
        }
        if (user.displayName === "student") {
          if (this.isMount) {
            this.setState({
              access: true,
              type: "Student"
            })
          }
        }
        if (user.displayName === "cr") {
          if (this.isMount) {
            this.setState({
              access: true,
              type: "CR"
            })
          }
        }
      }
    });
    setTimeout(() => {
      if (this.isMount) {
        this.setState({ loading: false })
      }
    }, 1000)
  }


  render() {

    var display;
    if (this.state.email) {
      this.state.access ?
        display = <MainPage email={this.state.email} type={this.state.type} /> :
        display = <Forbidden />
    } else {
      display = <Redirect to="/student/login" />
    }
    if (this.state.loading) {
      return <Loader />
    } else {
      return display
    }
  }
}

export default StuLanding;
