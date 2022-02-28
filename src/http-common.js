import axios from "axios";
import TokenService from "./Services/Auth/token.service";

// export default axios.create({
//   // baseURL: "http://ahi-app.herokuapp.com/api",
//   baseURL: "http://127.0.0.1:8000/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot or Laravel back-end
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;