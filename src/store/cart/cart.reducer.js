import { CART_POSSIBLE_ACTIONS } from "./cart.type";

const CART_IINITIAL_STATE = {
  showDropDown: false,
  cartItems: [],
};

export const cartReducer = (state = CART_IINITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_POSSIBLE_ACTIONS.TOGGLE_DROPDOWN:
      return { ...state, showDropDown: payload };
    case CART_POSSIBLE_ACTIONS.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
