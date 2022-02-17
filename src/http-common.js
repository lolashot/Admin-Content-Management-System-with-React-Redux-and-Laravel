import axios from "axios";

export default axios.create({
  baseURL: "http://ahi-app.herokuapp.com/api",
  // baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json"
  }
});