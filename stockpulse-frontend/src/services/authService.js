import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

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

    // Save token and role in cookies
    const { token } = response.data;
    const decodedToken = jwt_decode(token);

    Cookies.set('token', token, { expires: 1 }); // Token expires in 1 day
    Cookies.set('role', decodedToken.user.role, { expires: 1 });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
