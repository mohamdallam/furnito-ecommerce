import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
  totalQuantity: 0,
  totalItems: 0,
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("wishlistState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("wishlistState", serializedState);
  } catch (error) {
    // Handle errors while saving to local storage
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadState() || initialState, // Load initial state from local storage
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishlistItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.wishlistItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
        });
        state.totalQuantity++;
        saveState(state); // Save state to local storage after adding an item
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.wishlistItems.find((item) => item.id === id);
      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        saveState(state); // Save state to local storage after deleting an item
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
