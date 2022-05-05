import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get('http://localhost:3001/customer/products');
  return response.data;
};

const loadSession = async () => {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = token;
  await axios.post('http://localhost:3001/loading/session');
};

const postOrder = async (order) => {
  const response = await axios.post('http://localhost:3001/customer/orders', order);
  return response.data;
};

const getUserSeller = async () => {
  const response = await axios.get('http://localhost:3001/user?role=seller');
  return response.data;
};

const doLogin = async (user) => {
  const response = await axios.post('http://localhost:3001/login', user);
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get('http://localhost:3001/customer/orders');
  return response.data;
};

const doRegister = async (user) => {
  const response = await axios.post('http://localhost:3001/register', user);
  return response.data;
};

export {
  getProducts,
  loadSession,
  postOrder,
  getUserSeller,
  doLogin,
  getOrders,
  doRegister,
};
