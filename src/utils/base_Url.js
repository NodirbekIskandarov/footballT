import axios from "axios";
import { host } from "./API_urls";

const instance = axios.create({
  baseURL: host + '/api/v1/',
});
// Request interceptor (optional)
instance.interceptors.request.use(
  config => {
    // You can modify the request config here (e.g., add headers)
    return config; // Don't forget to return the config
  },
  error => {
    // Handle the error
    console.error('Error in request: ', error);
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
instance.interceptors.response.use(
  response => {
    // Handle the response data here if needed
    return response; // Don't forget to return the response
  },
  error => {
    // Handle any response errors globally here
    if (error.response) {
      console.error('Error in response: ', error.response.status, error.response.data);
    } else {
      console.error('Error: ', error.message);
    }
    return Promise.reject(error); // Forward the error for specific handling
  }
);

export default instance;