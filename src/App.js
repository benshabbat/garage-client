import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import {Account,Services,Messages,PageLanding,Users,Cars,ServicesAdmin,} from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { getUser,getMessagesByIdUser } from "./features/user/userSlice";
import { getCarsByType } from "./features/admin/adminSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user: userAuth } = useSelector((state) => state.auth);
  const { messages, user } = useSelector((state) => state.user);
  const { cars } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.isAdmin) dispatch(getCarsByType(user?._id));
    if (user?._id) dispatch(getMessagesByIdUser(user?._id));
    else if (userAuth) dispatch(getUser(userAuth?._id));
  }, [userAuth,user?._id,user?.isAdmin]);
  return (
    <>
      <BrowserRouter>
        <Header userAuth={userAuth} user={user} />
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/account" element={<Account />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cars" element={<Cars cars={cars}/>} />
          <Route path="/messages" element={<Messages messages={messages} />} />
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
