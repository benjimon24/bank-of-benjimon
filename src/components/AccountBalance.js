import React, { Component } from "react";

class AccountBalance extends Component {
  state = {};
  render() {
    return <div>Balance: {this.props.accountBalance}</div>;
  }
}

export default AccountBalance;
