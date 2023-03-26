import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { CartToggleContext } from "../../contexts/cart-toggle.context";
import { useSelector } from "react-redux";

import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from "./navigation.styles.jsx";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { currenUserSelector } from "../../../store/user/user.selectors";

const Navigation = () => {
  const { showDropDown } = useContext(CartToggleContext);
  // const [{ showDropDown }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const currentUser = useSelector(currenUserSelector);
  const handleSignOut = async () => {
    await signOutFromFireBase();
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
