import React from "react";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
const NavUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <li>
        <button className="" onClick={onLogout}>
          LogOut
        </button>
      </li>
    </>
  );
};

export default NavUser;
