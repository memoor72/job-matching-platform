import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};

