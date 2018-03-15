import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AccountBalance from "./components/AccountBalance";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Debits from "./components/Debits";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      debits: [],
      credits: [],
      currentUser: {
        userName: "jonSnow",
        memberSince: "08/23/99"
      }
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/debits").then(response => {
      this.setState({ debits: response.data });
    });
    axios.get("http://localhost:4000/credits").then(response => {
      this.setState({ credits: response.data });
    });
  }

  mockLogIn = info => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = info.userName;
    this.setState({ currentUser: newUser });
  };

  addDebit = debit => {
    let newDebits = this.state.debits;
    console.log(newDebits);
    let newDebit = {
      amount: parseFloat(debit.amount),
      description: debit.description,
      date: Date().toLocaleString()
    };
    newDebits.push(newDebit);
    this.setState({ debits: newDebits });
  };

  render() {
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home debits={this.state.debits} credits={this.state.credits} />} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route
            exact
            path="/login"
            render={() => <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />}
          />
          <Route
            exact
            path="/debits"
            render={() => (
              <div>
                <AccountBalance debits={this.state.debits} credits={this.state.credits} />
                <Debits addDebit={this.addDebit} debits={this.state.debits} />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
