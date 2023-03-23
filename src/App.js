import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import { ToastContainer } from "react-toastify";
import Account from "./pages/Account.jsx";
import "react-toastify/dist/ReactToastify.css";
import Services from "./pages/services/Services.jsx";
import ReqService from "./pages/reqService/ReqService.jsx";
import Messages from "./pages/messages/Messages.jsx";
import PageLanding from "./pages/pageLanding/PageLanding.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <HeaderMui /> */}
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/account" element={<Account />} />
          <Route path="/messages/:userId" element={<Messages />} />
          <Route path="/services/req/:carId" element={<ReqService />} />
          <Route path="/services/car/:carId" element={<Services />} />
          <Route path="/services/user/:userId" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
  }
export default App;
