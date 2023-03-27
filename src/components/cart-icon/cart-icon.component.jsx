import "./cart-icon.styles.jsx";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { isCartOpenSelector, totalItemsSelector } from "../../store/cart/cart.selector.js";
import { toggleDropDown } from "../../store/cart/cart.actions.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(totalItemsSelector);
  const showDropDown = useSelector(isCartOpenSelector);

  const handleToggleDropDown = () => dispatch(toggleDropDown(!showDropDown));

  return (
    <CartIconContainer onClick={handleToggleDropDown}>
      <ShoppingIcon />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
