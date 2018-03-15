import React, { Component } from "react";

class Crebit extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.credit.description}</div>
        <div>{this.props.credit.amount}</div>
        <div>{this.props.credit.date}</div>
      </div>
    );
  }
}

export default Crebit;
