import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [
      {
        name: "Product 1",
        price: 50,
        model: "TV",
        id: 1,
      },
      {
        name: "Product 2",
        price: 80,
        model: "phone",
        id: 2,
      },
      {
        name: "Product 3",
        price: 100,
        model: "printer",
        id: 3,
      },
      {
        name: "Product 4",
        price: 150,
        model: "headphones",
        id: 4,
      },
      {
        name: "Product 5",
        price: 180,
        model: "cover",
        id: 5,
      },
    ],
  };
  updatePrice = (index) => {
    this.updateStorage();

    let products = [...this.state.products];
    products[index].price += 10;
    this.setState({ products: products });

    console.log("hello from update price", index);
  };
  DeleteProduct = (id) => {
    this.updateStorage();

    let products = [...this.state.products];
    let newProductsArr = products.filter((product, index) => product.id != id);
    console.log("hello from delete product", newProductsArr);
    this.setState({ products: newProductsArr });
  };
  AddNewProduct = () => {
    this.updateStorage();

    let newProduct = {
      name: "new product",
      price: 1000,
      model: "mobile",
      id: Math.round(Math.random() * 100),
    };
    let products = [...this.state.products];
    products.push(newProduct);
    this.setState({ products: products });
    console.log(products);
  };
  updateStorage() {
    localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  componentDidMount() {
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
  }
  render() {
    return (
      <div className="bg-danger p-5">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h2>Products List</h2>
          <button className="btn btn-success" onClick={this.AddNewProduct}>
            Add New Product
          </button>
        </div>
        <div className="row gy-3">
          {this.state.products.map((product, index) => (
            <Child
              key={index}
              products={product}
              index={index}
              updatePriceHandler={this.updatePrice}
              deleteProductFunction={this.DeleteProduct}
            />
          ))}
        </div>
      </div>
    );
  }
}
