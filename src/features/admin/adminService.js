import axios from "axios";

const API_URL_USER = "/users"
const API_URL_CAR = "/cars"
const API_URL_SERVICES = "/services"
const API_URL_MESSAGES = "/messages"



// get users

const getUsers = async () => {
    const {data} = await axios.get(`${API_URL_USER}`)
    
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
const getMessagesByIdUser = async (userId) => {
    const {data} = await axios.get(`${API_URL_MESSAGES}/user/${userId}`)
    
    return data
}
const getCarsByIdUser = async (userId) => {
    const {data} = await axios.get(`${API_URL_CAR}/user/${userId}`)
    
    return data
}
const userService = {
    getUsers,
    getServicesByIdCar,
    getServicesByIdUser,
    createReqService,getMessagesByIdUser,getCarsByIdUser
};

export default userService;