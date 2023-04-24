import "./header.css";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import { NavUser, NavLanding } from "../index";

import NavAdmin from "../NavAdmin";

const Header = () => {
  const { user: userAuth } = useSelector((state) => state.auth);
  const { user, isError, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    } else if (userAuth) {
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
              </>
            ) : (
              <NavLanding />
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
