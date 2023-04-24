import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
      };
    
  return { onLogout };
};
export default useLogout;