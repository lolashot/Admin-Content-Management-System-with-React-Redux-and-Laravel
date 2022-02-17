import http from "../http-common";


const getAll = () => {
  return http.get("/system_config");
};

const get = id => {
  return http.get(`/system_config/${id}`);
};

const create = data => {
  return http.post("/system_config", data);
};

const update = (id, data) => {
  return http.put(`/system_config/${id}`, data);
};

const remove = id => {
  return http.delete(`/system_config/${id}`);
};

const removeAll = () => {
  return http.delete(`/system_config`);
};

const findByTitle = searchTitle => {
  return http.get(`/system_config/${searchTitle}`);
};


export default {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

