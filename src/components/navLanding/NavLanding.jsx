import React from "react";
// import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
const NavLanding = ({ id }) => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#reviews">Reviews</a>
      </li>
      <li>
        <a href="#address">Address</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#message">Contact</a>
      </li>
      {/* <li>
        <Link  to="/home">Home</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/location">Location</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to={`/services/user/${id}`}>Services</Link>
      </li>
      <li>
        <Link to={`/messages/${id}`}>Contact</Link>
      </li> */}
      <li>
        <Link to="/login" className="">
          Login
        </Link>
      </li>
    </>
  );
};

export default NavLanding;
