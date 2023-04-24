import "./myAccount.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
import useLogout from "../../hooks/useLogout"
const MyAccount = () => {
  const { _id } = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {onLogout} = useLogout();
  useEffect(() => {
    dispatch(getUser(_id));
  }, []);
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
