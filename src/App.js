import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import HeaderMui from "./components/HeaderMui.jsx"
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home.jsx";
import "react-toastify/dist/ReactToastify.css";
import Services from "./pages/Services.jsx";
import ReqService from "./pages/ReqService.jsx";
import Messages from "./pages/Messages.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          {/* <HeaderMui /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages/:userId" element={<Messages />} />
            <Route path="/services/req/:userId" element={<ReqService />} />
            <Route path="/services/car/:carId" element={<Services />} />
            <Route path="/services/user/:userId" element={<Services />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
