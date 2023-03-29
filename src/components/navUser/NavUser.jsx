import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Services from "../../pages/services/Services";
import ReqService from "../../pages/reqService/ReqService";
const NavUser = () => {
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
      <li>
        <Link to={`/services/user`}>
          Services
        </Link>
      </li>
      {/* <li>
        <Link to={`/services/req/${carId}`}>
          <ReqService />
        </Link>
      </li> */}
      <li>
        <button className="" onClick={onLogout}>
          LogOut
        </button>
      </li>
    </>
  );
};

export default NavUser;
