import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
        <h1>Bank of React</h1>
        <Link to="/userProfile"> User Profile </Link>
        <Link to="/login"> Login </Link>
        <AccountBalance debits={this.props.debits} credits={this.props.credits} />
      </div>
    );
  }
}

export default Home;
