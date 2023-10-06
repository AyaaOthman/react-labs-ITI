import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { name, price, model, id } = this.props.products;
    return (
      <div className="col-md-4">
        <div className="bg-info p-3 rounded-2">
          <h4> {name}</h4>
          <p>product price: {price}</p>
          <p>product model: {model}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-dark"
              onClick={() => this.props.updatePriceHandler(this.props.index)}
            >
              Increase Price
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteProductFunction(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
