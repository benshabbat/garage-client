import React from "react";
import Login from "../login/Login";
import useOpenModel from "../../hooks/useOpenModel";
const NavLanding = () => {
  const { openModel, handelClick } = useOpenModel();
  return (
    <>
      <div className="item-nav">
        <a href="#home">Home</a>
      </div>
      <div className="item-nav">
        <a href="#reviews">Reviews</a>
      </div>
      <div className="item-nav">
        <a href="#address">Address</a>
      </div>
      <div className="item-nav">
        <a href="#about">About</a>
      </div>
      <div className="item-nav">
        <a href="#services">Services</a>
      </div>
      <div className="item-nav">
        <a href="#contact">Contact</a>
      </div>

      <div className="item-nav">
        <button onClick={handelClick}>Login</button>
        <Login handelClick={handelClick} open={openModel} />
      </div>
     
    </>
  );
};

export default NavLanding;
