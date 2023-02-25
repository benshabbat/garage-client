import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
// import { useEffect } from "react"
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // useEffect(() => {

  // }, [user])

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Garage770</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt />
                LogOut
              </button>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Create User
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
