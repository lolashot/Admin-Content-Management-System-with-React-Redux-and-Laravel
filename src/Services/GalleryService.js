import http from "../http-common";

const getAll = () => {
  return http.get("/gallery");
};

const get = id => {
  return http.get(`/gallery/${id}`);
};

const create = data => {
  return http.post("/gallery", data);
};

const update = (id, data) => {
  return http.put(`/gallery/${id}`, data);
};

const remove = id => {
  return http.delete(`/gallery/${id}`);
};

const removeAll = () => {
  return http.delete(`/gallery`);
};

const findByTitle = searchTitle => {
  return http.get(`/gallery/${searchTitle}`);
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