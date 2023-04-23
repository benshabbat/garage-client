import "./header.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavUser, NavLanding } from "../index";
import MyAccount from "../myAccount/MyAccount";
import Login from "../../pages/login/Login";
import OpenModel from "../openModel/OpenModel";
const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const [openModel, setOpenModel] = useState(false);
  const handelClick = () => {
    setOpenModel(!openModel);
  };
  return (
    <>
      <div className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Garage770</Link>
          </div>
          <div>
            {user ? <NavUser /> : <NavLanding />}
            {user ? (
              <div className="item-nav dropdown">
                <MyAccount />
              </div>
            ) : (

              <div className="item-nav">
                <button onClick={handelClick}>Login</button>
                <OpenModel open={openModel} model={<Login handelClick={handelClick}/>}/>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
