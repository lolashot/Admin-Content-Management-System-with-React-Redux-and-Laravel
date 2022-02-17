import http from "../http-common";

const getAll = () => {
  return http.get("/testimony");
};

const get = id => {
  return http.get(`/testimony/${id}`);
};

const create = data => {
  return http.post("/testimony", data);
};

const update = (id, data) => {
  return http.put(`/testimony/${id}`, data);
};

const remove = id => {
  return http.delete(`/testimony/${id}`);
};

const removeAll = () => {
  return http.delete(`/testimony`);
};

const findByTitle = searchTitle => {
  return http.get(`/testimony/${searchTitle}`);
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