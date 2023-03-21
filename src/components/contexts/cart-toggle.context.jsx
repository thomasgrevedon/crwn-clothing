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

const removeQuantityByOne = (cartItems, item) => {
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

export const CartToggleProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setTotalItems(computeTotalItems(cartItems));
    setTotalPrice(computeTotalPrice(cartItems));
  }, [cartItems]);

  const removeOneQantity = (item) => {
    setCartItems(removeQuantityByOne(cartItems, item));
  };

  const addOneQantity = (item) => {
    setCartItems(addQuantityByOne(cartItems, item));
  };

  const deleteItem = (item) => {
    setCartItems(deleteItemFromCart(cartItems, item));
  };

  const value = { showDropDown, setShowDropDown, cartItems, addItemToCart, totalItems, removeOneQantity, addOneQantity, deleteItem, totalPrice };
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
