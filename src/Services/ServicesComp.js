import http from "../http-common";

const getAll = () => {
  return http.get("/service");
};

const get = id => {
  return http.get(`/service/${id}`);
};

const create = data => {
  return http.post("/service", data);
};

const update = (id, data) => {
  return http.put(`/service/${id}`, data);
};

const remove = id => {
  return http.delete(`/service/${id}`);
};

const removeAll = () => {
  return http.delete(`/service`);
};

const findByTitle = searchTitle => {
  return http.get(`/service/${searchTitle}`);
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

// export default TutorialService;