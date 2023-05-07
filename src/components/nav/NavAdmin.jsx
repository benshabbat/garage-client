import React from "react";
import { Link } from "react-router-dom";
const NavAdmin = () => {
  return (
    <>
      <div className="item-nav">
        <Link to={`/users`}>Get Users</Link>
      </div>
      <div className="item-nav">
        <Link to={`/cars`}>Get Cars</Link>
      </div>
      <div className="item-nav">
        <Link to={`/services`}>Get Services</Link>
      </div>
    </>
  );
};

export default NavAdmin;
