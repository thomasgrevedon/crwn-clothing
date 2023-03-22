import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartToggleContext } from "../../contexts/cart-toggle.context";

import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from "./navigation.styles.jsx";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showDropDown } = useContext(CartToggleContext);

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
