import axios from "axios";
import TokenService from "./token.service";
const API_URL = "http://localhost:8000/api/";
const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  }).then((response) => {
    console.log('reg-response1', response);
    if (response.data.token) {
      // localStorage.setItem("user", JSON.stringify(response.data));
      TokenService.setUser(response.data);
      console.log('reg-response2', response.data);
    }
    return response.data;
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        TokenService.setUser(response.data);

      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export default {
  register,
  login,
  logout,
  getCurrentUser,
};