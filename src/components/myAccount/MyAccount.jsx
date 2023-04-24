import "./myAccount.css";
import React from "react";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const MyAccount = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
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
