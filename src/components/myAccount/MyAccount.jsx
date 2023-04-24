import "./myAccount.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";
const MyAccount = () => {
  const { user } = useSelector((state) => state.user);

  const { onLogout } = useLogout();

  return (
    <>
      <button className="dropbtn">My Account</button>
      <div className="dropdown-content">
        <div>
          <Link to={`/account`}>{user?.username}</Link>
        </div>
        <div>
          <button onClick={onLogout}>LogOut</button>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
