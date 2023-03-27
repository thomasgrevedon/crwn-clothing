import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const isCartOpenSelector = createSelector([cartSelector], (cartSelector) => {
  return cartSelector.showDropDown;
});

export const cartItemsSelector = createSelector([cartSelector], (cartSelector) => {
  return cartSelector.cartItems;
});

export const totalItemsSelector = createSelector([cartItemsSelector], (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});

export const totalPriceSelector = createSelector([cartItemsSelector], (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
});
