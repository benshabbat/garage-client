import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
const Landing = ({ id }) => {
  return (
    <>
      <li>
        <Link to="/home">Home</Link>
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
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to={`/services/user/${id}`}>Services</Link>
      </li>
      <li>
        <Link to={`/messages/${id}`}>Messages</Link>
      </li>
      <li>
        <Link to="/login" className="">
          Login
        </Link>
      </li>
    </>
  );
};

export default Landing;
