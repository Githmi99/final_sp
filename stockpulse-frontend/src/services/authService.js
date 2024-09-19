import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const register = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(`${API_URL}/users/register`, formData);
    console.log(response);
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(`${API_URL}/users/login`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};