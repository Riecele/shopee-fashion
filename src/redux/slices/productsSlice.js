import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  productItems: [
    {
      id: uuidv4(),
      name: "T-Shirt",
      description: "Comfortable cotton t-shirt",
      quantity: 5,
      price: 20,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-4.jpg", 
    },
    {
      id: uuidv4(),
      name: "Jeans",
      description: "Stylish denim jeans",
      quantity: 3,
      price: 40,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-5.jpg",
    },
    {
      id: uuidv4(),
      name: "Sneakers",
      description: "Comfortable running sneakers",
      quantity: 2,
      price: 60,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-4.jpg",
    },
    {
      id: uuidv4(),
      name: "T-Shirt",
      description: "Comfortable cotton t-shirt",
      quantity: 5,
      price: 20,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-4.jpg", 
    },
    {
      id: uuidv4(),
      name: "Jeans",
      description: "Stylish denim jeans",
      quantity: 3,
      price: 40,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-5.jpg",
    },
    {
      id: uuidv4(),
      name: "Sneakers",
      description: "Comfortable running sneakers",
      quantity: 2,
      price: 60,
      image: "https://res.cloudinary.com/dcdivbkwd/image/upload/v1676012835/cld-sample-4.jpg",
    },

  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { name, description, quantity, price, image } = action.payload;
      state.productItems.push({
        id: uuidv4(),
        name,
        description,
        quantity,
        price,
        image,
      });
    },
    updateProduct: (state, action) => {
      const { id, name, description, quantity, price } = action.payload;
      const product = state.productItems.find((p) => p.id === id);
      if (product) {
        product.name = name;
        product.description = description;
        product.quantity = quantity;
        product.price = price;
      }
    },
    updateProductQuantity: (state, action) => {
     console.log("action", action);
      const { id, quantity } = action.payload;
      const product = state.productItems.find((p) => p.id === id);
      if (product) {
        product.quantity -= quantity;
      }
    },
    removeProduct: (state, action) => {
      state.productItems = state.productItems.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, removeProduct, updateProductQuantity } = productsSlice.actions;
export default productsSlice.reducer;
