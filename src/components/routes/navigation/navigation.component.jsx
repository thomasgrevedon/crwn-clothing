import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";
import { signOutFromFireBase } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutFromFireBase();
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link to={"/"} className='logo-container'>
          <Crwn />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <Link className='nav-link' onClick={handleSignOut} to={"/auth"}>
              Sign-out
            </Link>
          ) : (
            <Link className='nav-link' to={"/auth"}>
              Sign-in
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <CartDropdown></CartDropdown>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
