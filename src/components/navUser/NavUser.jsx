import "./navUser.css";
import React from "react";
import { Link } from "react-router-dom";
import MyAccount from "../myAccount/MyAccount";
import { useSelector } from "react-redux";
const NavUser = () => {
  const { user = null } = useSelector((state) => state.user);
  return (
    <>
      {!user?.isAdmin && (
        <>
          <div className="item-nav">
            <Link to={`/services/user`}>Services</Link>
          </div>
          <div className="item-nav">
            <Link to={`/account`}>Account</Link>
          </div>
        </>
      )}
      <div className="item-nav">
        <Link to={`/messages`}>Messages</Link>
      </div>
      <div className="item-nav dropdown">
        <MyAccount />
      </div>
    </>
  );
};

export default NavUser;
