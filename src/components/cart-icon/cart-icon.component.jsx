import { useContext } from "react";
import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { totalItems, showDropDown, setShowDropDown } = useContext(CartToggleContext);

  const toggleDropDown = () => setShowDropDown(!showDropDown);

  return (
    <CartIconContainer onClick={toggleDropDown}>
      <ShoppingIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
