import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("----");
  console.log(currentUser);
  console.log("///");

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
          <Link className='nav-link' to={"/auth"}>
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
