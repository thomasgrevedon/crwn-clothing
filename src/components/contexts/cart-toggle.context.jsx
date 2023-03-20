const { createContext, useState } = require("react");

export const CartToggleContext = createContext({
  showDropDown: false,
  setShowDropDown: () => {},
});

export const CartToggleProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const value = { showDropDown, setShowDropDown };
  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
