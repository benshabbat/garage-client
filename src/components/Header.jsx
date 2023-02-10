import {FaSignInAlt,faSignOutAlt,FaUser} from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <Link to="/">Garage770</Link> 
        </div>
        <ul>
            <li>
                <Link to="/login"><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to="/register"><FaUser/>Register</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header