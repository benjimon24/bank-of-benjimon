import React, { Component } from "react";
import Debit from "./Debit";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  state = {
    new: {
      amount: 0,
      description: ""
    }
  };

  handleAmountChange = e => {
    const updatedAmt = { ...this.state.new };
    updatedAmt[e.target.name] = e.target.value;
    this.setState({ new: updatedAmt });
  };

  handleDescChange = e => {
    const updatedDesc = { ...this.state.new };
    updatedDesc[e.target.name] = e.target.value;
    this.setState({ new: updatedDesc });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addDebit(this.state.new);
  };

  render() {
    return (
      <div>
        <h1>Debits</h1>
        {this.props.debits.map(debit => {
          return <Debit debit={debit} />;
        })}

        <h2>Add Debit</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" step="0.01" name="amount" onChange={this.handleAmountChange} />
          </div>
          <div>
            <label htmlFor="desctiption">Description</label>
            <input type="text" name="description" onChange={this.handleDescChange} />
          </div>
          <button>Add</button>
        </form>
        <Link to="/">Home </Link>
      </div>
    );
  }
}

export default Debits;
