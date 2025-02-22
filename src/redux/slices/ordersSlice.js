import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { updateProductQuantity } from "./productsSlice";

const initialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const newOrder = {
        id: uuidv4(),
        items: action.payload,
        date: new Date().toISOString(),
      };
      console.log("New order", newOrder);
      state.push(newOrder);
      action.payload.forEach(item => {
        updateProductQuantity(state, { payload: { id: item.id, quantity: item.quantity } });
      });
    },
  },
});

export const { createOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
