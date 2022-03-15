import http from "../http-common";



const getAll = () => {
  return http.get("/user");
};

const get = id => {
  return http.get(`/user/${id}`);
};

const create = data => {
  return http.post("/user", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/${id}`);
};

const removeAll = () => {
  return http.delete(`/user`);
};

const findByTitle = searchTitle => {
  return http.get(`/user/${searchTitle}`);
};


const UsersDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default UsersDataService;