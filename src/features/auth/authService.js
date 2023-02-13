import axios from "axios";

const API_URL_REGISTER = "/api/auth/register";

//Create a new User
const register = async (userData) => {
  const { data } = await axios.post(API_URL_REGISTER, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const authService={
    register
}

export default authService