import "./navUser.css";
import React from "react";
import {  Link } from "react-router-dom";
import MyAccount from "../myAccount/MyAccount";

const NavUser = () => {


  return (
    <>
      <div className="item-nav">
        <Link to={`/services/user`}>Services</Link>
      </div>
      <div className="item-nav">
        <Link to={`/account`}>Account</Link>
      </div>
      <div className="item-nav">
        <Link to={`/messages`}>Messages</Link>
      </div>
     
    </>
  );
};

export default NavUser;
