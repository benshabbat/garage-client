import React from "react";
// import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
const NavLanding = ({ id }) => {
  return (
    <>
      {/* <li>
        <a href="#home">Home1</a>
      </li>
      <li>
        <a href="#reviews">reviews1</a>
      </li> */}
      <li>
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
      </li>
      <li>
        <Link to="/login" className="">
          Login
        </Link>
      </li>
    </>
  );
};

export default NavLanding;
