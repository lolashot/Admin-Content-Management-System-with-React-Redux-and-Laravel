import http from "../http-common";

const getAll = () => {
  return http.get("/previousevents");
};

const get = id => {
  return http.get(`/previousevents/${id}`);
};

const create = data => {
  return http.post("/previousevents", data);
};

const update = (id, data) => {
  return http.put(`/previousevents/${id}`, data);
};

const remove = id => {
  return http.delete(`/previousevents/${id}`);
};

const removeAll = () => {
  return http.delete(`/previousevents`);
};

const findByTitle = searchTitle => {
  return http.get(`/previousevents/${searchTitle}`);
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