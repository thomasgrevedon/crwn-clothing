const { createContext, useState, useEffect } = require("react");

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

export const CartToggleContext = createContext({
  showDropDown: false,
  setShowDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
});

export const CartToggleProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setTotalItems(computeTotalItems(cartItems));
  }, [cartItems]);

  const value = { showDropDown, setShowDropDown, cartItems, addItemToCart, totalItems };
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
