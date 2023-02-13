import {FaSignInAlt,faSignOutAlt,FaUser} from "react-icons/fa"
import { Link,useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">Garage770</Link> 
        </div>
        <ul>
            <li>
                <Link to="/login"><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to="/register"><FaUser/>Create User</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header