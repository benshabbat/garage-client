import axios from "axios";

const API_URL_REGISTER = "/auth/register";
const API_URL_LOGIN = "/auth/login";

//Create a new User
const register = async (userData) => {
  const { data } = await axios.post(API_URL_REGISTER, userData);

  // if (data) {
  //   localStorage.setItem("user", JSON.stringify(data));
  // }
  return data;
};

//login
const login = async (userData) => {
  const { data } = await axios.post(API_URL_LOGIN, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login
};

export default authService;
