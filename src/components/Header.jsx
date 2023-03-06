import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
// import { useEffect } from "react"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { _id } = useSelector((state) => state.user.user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // useEffect(() => {

  // }, [user])

  return (
    <>
      <header className="p-4 flex justify-between">
        <div>
          <Link to="/">Garage770</Link>
        </div>
        <ul class="flex flex-row justify-between mx-4">
          {user && _id ? (
            <>
              <li>
                <button className="flex justify-between" onClick={onLogout}>
                  <FaSignOutAlt />
                  LogOut
                </button>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to={`/services/user/${_id}`}>Services</Link>
              </li>
              <li>
                <Link to={`/messages/${_id}`}>Messages</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="flex justify-between mx-4">
                  <FaSignInAlt />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="flex justify-between mx-4">
                  <FaUser />
                  Create User
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
};

export default Header;
