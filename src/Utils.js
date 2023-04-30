import axios from "axios";
const API_URL_CAR = "/cars"
const getAll = (url) => {
  axios.get(url);
};
const getById = (url, id) => {
  axios.get(`${url}/${id}`);
};
const addItem = (url, obj) => {
  axios.post(url, obj);
};
const updateItem = (url, id, obj) => {
  axios.put(`${url}/${id}`, obj);
};
const createCar = (id, obj) => {
  axios.post(`${API_URL_CAR}/${id}`, obj);
};
const deleteItem = (url, id) => {
  axios.delete(`${url}/${id}`);
};
const getUserFullData = (id) => {
  
};



export { getAll, getById, addItem, updateItem, deleteItem,createCar };
