import axios from "axios";

const API_URL_USER = "/users"

const API_URL_SERVICES = "/services"
const API_URL_MESSAGES = "/messages"
const ADMIN = "63e14deca4340e45d23f20b2"

// get user by _id

const getUser = async (id) => {
    const {data} = await axios.get(`${API_URL_USER}/${id}`)
    
    return data
}

const getServicesByIdCar = async (carId) => {
    const {data} = await axios.get(`${API_URL_SERVICES}/car/${carId}`)
    
    return data
}
const getServicesByIdUser = async (userId) => {
    const {data} = await axios.get(`${API_URL_SERVICES}/user/${userId}`)
    
    return data
}
const createReqServicesByIdUser = async (userId,userData) => {
    const {data} = await axios.post(`${API_URL_MESSAGES}/${userId}/${ADMIN}`,userData)
    
    return data
}
const userService = {
    getUser,
    getServicesByIdCar,
    getServicesByIdUser,
    createReqServicesByIdUser
};

export default userService;