import axios from "axios";
const API_URL_CAR = "/cars";
const API_URL_USER = "/users";
const getAll = (url) => {
  axios.get(url);
};
const getById = (url, id) => {
  axios.get(`${url}/${id}`);
};
const addItem = (url, obj) => {
  axios.post(url, obj);
};
const updateUser = (id, obj) => {
  axios.put(`${API_URL_USER}/${id}`, obj);
};
const updateCar = (id, obj) => {
  axios.put(`${API_URL_CAR}/${id}`, obj);
};
const createCar = (id, obj) => {
  axios.post(`${API_URL_CAR}/${id}`, obj);
};
const deleteUser= (id) => {
  axios.delete(`${API_URL_USER}/${id}`);
};
const deleteCar= (idCar ,idUser) => {
  axios.delete(`${API_URL_CAR}/${idCar}/${idUser}`);
};
const getUser = (id) => {
  return axios.get(`${API_URL_USER}/${id}`);
};

export { getAll, getById, addItem, updateUser, deleteUser, createCar, getUser,deleteCar,updateCar };
