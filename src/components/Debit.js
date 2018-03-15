import React, { Component } from "react";

class Debit extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.debit.description}</div>
        <div>{this.props.debit.amount}</div>
        <div>{this.props.debit.date}</div>
      </div>
    );
  }
}

export default Debit;
