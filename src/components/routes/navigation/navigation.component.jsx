import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from "./navigation.styles.jsx";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { currentUserSelector } from "../../../store/user/user.selectors";
import { isCartOpenSelector } from "../../../store/cart/cart.selector.js";
import { sigingOut } from "../../../store/user/user.action.js";

const Navigation = () => {
  // const [{ showDropDown }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const dispatch = useDispatch();
  const showDropDown = useSelector(isCartOpenSelector);
  const currentUser = useSelector(currentUserSelector);
  const handleSignOut = () => {
    dispatch(sigingOut());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Crwn />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink className='nav-link' to={"/shop"}>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink className='nav-link' onClick={handleSignOut} to={"/auth"}>
              Sign-out
            </NavLink>
          ) : (
            <NavLink className='nav-link' to={"/auth"}>
              Sign-in
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
      </NavigationContainer>
      {showDropDown && <CartDropdown></CartDropdown>}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
