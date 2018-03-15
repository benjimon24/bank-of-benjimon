import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountBalance extends Component {
  state = {};
  render() {
    let debits = this.props.debits.reduce((total, debit) => (total += debit.amount), 0);
    let credits = this.props.credits.reduce((total, credit) => (total += credit.amount), 0);
    return (
      <div>
        <div> Balance: {(debits - credits).toFixed(2)} </div>
        <div>
          <Link to="/debits"> Debits: </Link> {debits}
        </div>
        <div> Total Credits: {credits} </div>
      </div>
    );
  }
}

export default AccountBalance;
