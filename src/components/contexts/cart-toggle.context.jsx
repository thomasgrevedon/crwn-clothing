import { createAction } from "../../utils/reduce/reduce";

const { createContext, useState, useEffect, useReducer } = require("react");

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

const computeTotalItems = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
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

const computeTotalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const CartToggleContext = createContext({
  showDropDown: false,
  setShowDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
  removeOneQantity: () => {},
  addOneQantity: () => {},
  deleteItem: () => {},
  totalPrice: 0,
});

export const INITIAL_STATE = {
  showDropDown: false,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};
const CART_ACTIONS = {
  TOGGLE_DROP_DOWN: "TOGGLE_DROP_DOWN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.TOGGLE_DROP_DOWN:
      return { ...state, showDropDown: payload };
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      break;
  }
};
export const CartToggleProvider = ({ children }) => {
  const [{ showDropDown, cartItems, totalItems, totalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newTotal = computeTotalItems(newCartItems);
    const newTotalPrcie = computeTotalPrice(newCartItems);
    const payload = {
      cartItems: newCartItems,
      totalItems: newTotal,
      totalPrice: newTotalPrcie,
    };
    dispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, payload));
  };

  const setShowDropDown = () => {
    const payload = !showDropDown;
    dispatch(createAction(CART_ACTIONS.TOGGLE_DROP_DOWN, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeOneQantity = (item) => {
    const newCartItems = removeQuantityByOne(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const addOneQantity = (item) => {
    const newCartItems = addQuantityByOne(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItem = (item) => {
    const newCartItems = deleteItemFromCart(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const value = { showDropDown, setShowDropDown, cartItems, addItemToCart, totalItems, removeOneQantity, addOneQantity, deleteItem, totalPrice };
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
