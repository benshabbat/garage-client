import "./header.css";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { logout, reset } from "../../features/auth/authSlice";
import { NavUser, NavLanding } from "../index";
import MyAccount from "../myAccount/MyAccount";
import Login from "../../pages/login/Login";
import NavAdmin from "../NavAdmin";
import useOpenModel from "../../hooks/useOpenModel";
const Header = () => {
  const { user: userAuth } = useSelector((state) => state.auth);
  const { user, isError, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { openModel, handelClick } = useOpenModel();
  useEffect(() => {
    if (isError) {
      console.log(message);
    } else if (!userAuth) {
      dispatch(logout());
      dispatch(reset());
    } else {
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
            {userAuth ? (
              <>
              {user?.isAdmin && <NavAdmin />}
                <NavUser />
                <div className="item-nav dropdown">
                  <MyAccount />
                </div>
              </>
            ) : (
              <>
                <NavLanding />
                <div className="item-nav">
                  <button onClick={handelClick}>Login</button>
                  <Login handelClick={handelClick} open={openModel} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
