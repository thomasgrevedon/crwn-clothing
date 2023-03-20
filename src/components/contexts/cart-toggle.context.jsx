const { createContext, useState } = require("react");

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

export const CartToggleContext = createContext({
  showDropDown: false,
  setShowDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartToggleProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { showDropDown, setShowDropDown, cartItems, addItemToCart };
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
