import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "nextGen",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
    singleDelete: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    reseetCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  incressQuantity,
  decressQuantity,
  singleDelete,
  reseetCart,
} = counterSlice.actions;

export default counterSlice.reducer;
