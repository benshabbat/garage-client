import axios from "axios";

const API_URL_USER = "/users"

const API_URL_SERVICES = "/services"


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
const userService = {
    getUser,
    getServicesByIdCar,
    getServicesByIdUser
};

export default userService;