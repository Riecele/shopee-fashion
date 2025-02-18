import React, { Component, Fragment } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library

class StoreManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Laptop", description: "High-performance laptop", quantity: 10 },
        { id: 2, name: "Phone", description: "Latest smartphone", quantity: 5 },
        { id: 3, name: "Headphones", description: "Noise-canceling headphones", quantity: 8 },
      ],
      cart: [],
    };
  }
// Add to cart function
  addToCart = (product) => {
    if (product.quantity > 0) {
      this.setState((prevState) => ({
        products: prevState.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        ),
        cart: [...prevState.cart, product],
      }));
    }
  };

  // Remove from cart function
  removeFromCart = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== productId),
    }));
  };

  // Update product quantity function
  updateProductQuantity = (productId, amount) => {
    this.setState((prevState) => ({
      products: prevState.products.map((p) =>
        p.id === productId ? { ...p, quantity: Math.max(0, p.quantity + amount) } : p
      ),
    }));
  };

  // Add new product function
  addProduct = (name, description, quantity) => {
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
    };

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));
  };

  // Update existing product function
  updateProduct = (productId, name, description, quantity) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === productId
          ? { ...product, name, description, quantity }
          : product
      ),
    }));
  };

  render() {
    return (
      <Fragment>
        {this.props.children({
          products: this.state.products,
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          updateProductQuantity: this.updateProductQuantity,
          addProduct: this.addProduct,         
          updateProduct: this.updateProduct,  
        })}
      </Fragment>
    );
  }
}

export default StoreManager;
