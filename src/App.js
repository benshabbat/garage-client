import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Account,Services,Messages,
  PageLanding,Users,Cars,ServicesAdmin} from "./pages";
import Header from "./components/header/Header.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./features/user/userSlice";
function App() {
  const { user: userAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userAuth) dispatch(getUser(userAuth?._id));
  }, [userAuth]);
  return (
    <>
      <BrowserRouter>
        <Header userAuth={userAuth} />
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/account" element={<Account />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/services" element={<ServicesAdmin />} />
          <Route path="/services/user/" element={<Services />} />
          <Route path="/services/car/:carId" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;
