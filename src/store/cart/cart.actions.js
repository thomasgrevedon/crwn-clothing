import { createAction } from "../../utils/reduce/reduce";
import { CART_POSSIBLE_ACTIONS } from "./cart.type";

const addCartItem = (cartItems, productToAdd) => {
  const item = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (item) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeQuantityByOne = (cartItems, item) => {
  if (item.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== item.id;
    });
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === item.id && cartItem.quantity > 0 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
  });
};

const addQuantityByOne = (cartItems, item) => {
  return cartItems.map((cartItem) => {
    return cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
  });
};

const deleteItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== item.id;
  });
};

export const toggleDropDown = (payload) => {
  return createAction(CART_POSSIBLE_ACTIONS.TOGGLE_DROPDOWN, payload);
};

export const addItems = (cartItems, productToAdd) => {
  return createAction(CART_POSSIBLE_ACTIONS.SET_CART_ITEMS, addCartItem(cartItems, productToAdd));
};

export const removeOneQantity = (cartItems, item) => {
  const newCartItems = removeQuantityByOne(cartItems, item);
  return createAction(CART_POSSIBLE_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const addOneQantity = (cartItems, item) => {
  const newCartItems = addQuantityByOne(cartItems, item);
  return createAction(CART_POSSIBLE_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const deleteItem = (cartItems, item) => {
  const newCartItems = deleteItemFromCart(cartItems, item);
  return createAction(CART_POSSIBLE_ACTIONS.SET_CART_ITEMS, newCartItems);
};
