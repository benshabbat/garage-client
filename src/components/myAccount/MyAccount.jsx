import "./myAccount.css";
import React from "react";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <button className="dropbtn">
        My Account
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <div>
          <button className="" onClick={onLogout}>
            LogOut
          </button>
        </div>
        <div>test2</div>
      </div>
    </>
  );
};

export default MyAccount;
