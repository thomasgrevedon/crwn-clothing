import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartToggleContext } from "../contexts/cart-toggle.context";

const CartIcon = () => {
  const { showDropDown, setShowDropDown } = useContext(CartToggleContext);

  const toggleDropDown = () => setShowDropDown(!showDropDown);

  return (
    <div className='cart-icon-container' onClick={toggleDropDown}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
