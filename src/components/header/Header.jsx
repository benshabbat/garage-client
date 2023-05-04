import "./header.css";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MyAccount, NavAdmin, NavUser, NavLanding } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
const Header = () => {
  const { user:userAuth} = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if(userAuth)dispatch(getUser(userAuth?._id));
  }, [userAuth]);
  return (
    <>
      <div className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Garage770</Link>
          </div>
          <div>
            {!userAuth||user?.isAdmin===undefined ? (
              <NavLanding />
            ) : (
              <>
                {console.log(user?.isAdmin)}
                {!!user.isAdmin ? <NavAdmin /> : <NavUser />}
                <div className="item-nav">
                  <Link to={`/messages`}>Messages</Link>
                </div>
                <div className="item-nav dropdown">
                  <MyAccount />
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
