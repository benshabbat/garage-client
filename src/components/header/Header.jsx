import "./header.css";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { logout, reset } from "../../features/auth/authSlice";
import { NavUser, NavLanding } from "../index";
import MyAccount from "../myAccount/MyAccount";
import Login from "../../pages/login/Login";
import OpenModel from "../openModel/OpenModel";
import NavAdmin from "../NavAdmin";
const Header = () => {
  const { user: userAuth } = useSelector((state) => state.auth);
  const { user, isError, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [openModel, setOpenModel] = useState(false);
  const handelClick = () => {
    setOpenModel(!openModel);
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    } 
    else if (!userAuth) {
      dispatch(logout());
      dispatch(reset());
    } 
    else {
      dispatch(getUser(userAuth));
    }
  }, []);
  return (
    <>
      <div className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Garage770</Link>
          </div>
          <div>
            {userAuth ? <NavUser /> : <NavLanding />}
            {userAuth && user?.isAdmin && <NavAdmin />}
            {userAuth ? (
              <div className="item-nav dropdown">
                <MyAccount />
              </div>
            ) : (
              <div className="item-nav">
                <button onClick={handelClick}>Login</button>
                <OpenModel
                  open={openModel}
                  model={<Login handelClick={handelClick} />}
                />
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
