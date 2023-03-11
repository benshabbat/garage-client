import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavUser from "../../components/navUser/NavUser";
import Landing from "../../components/landing/Landing";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { _id } = useSelector((state) => state.user.user);

  return (
    <>
      <header className="header-container">
        <div className="logo">
          <Link to="/">Garage770</Link>
        </div>
        <ul>{user && _id ? <NavUser /> : <Landing id={_id} />}</ul>
      </header>
    </>
  );
};

export default Header;
