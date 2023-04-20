import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavUser, NavLanding } from "../index";
import MyAccount from "../myAccount/MyAccount";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  // const { _id } = useSelector((state) => state.user.user);

  return (
    <>
      <header className="header-container">
        <div className="logo">
          <Link to="/">Garage770</Link>
        </div>
        <div>{user ? <NavUser /> : <NavLanding />}</div>
      </header>
      <MyAccount />
      <Outlet />
    </>
  );
};

export default Header;
