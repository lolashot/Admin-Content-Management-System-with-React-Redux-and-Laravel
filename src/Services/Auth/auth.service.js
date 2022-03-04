import axios from "axios";
import http from "../../http-common";
import TokenService from "./token.service";
// const API_URL = "https://ahi-app.herokuapp.com/api/";
const register = (name, email, password) => {
  // To use const API_URL above

  // return axios.post(API_URL + "register", {
    return http.post("/register", {

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
    // To use const API_URL above

  // return axios
    // .post(API_URL + "login", {
  return http
      .post("/login", {
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