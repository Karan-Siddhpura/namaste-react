import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});

export const { addItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
