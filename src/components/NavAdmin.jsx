import React from 'react'
import { Link } from "react-router-dom";
const NavAdmin = () => {
  return (
    <>
    <div className="item-nav">
      <Link to={`/services/user`}>Create Car</Link>
    </div>
    <div className="item-nav">
      <Link to={`/account`}>Create User</Link>
    </div>
    <div className="item-nav">
      <Link to={`/messages`}>Users</Link>
    </div>
  </>
  )
}

export default NavAdmin