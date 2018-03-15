import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AccountBalance from "./components/AccountBalance";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 123131.41,
      currentUser: {
        userName: "jonSnow",
        memberSince: "08/23/99"
      }
    };
  }

  mockLogIn = info => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = info.userName;
    this.setState({ currentUser: newUser });
    console.log(this.state.currentUser);
  };

  render() {
    // const HomeComponent = () => <Home accountBalance={this.state.accountBalance} />;
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home accountBalance={this.state.accountBalance} />} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
