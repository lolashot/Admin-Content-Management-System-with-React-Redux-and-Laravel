import http from "../http-common";



const getAll = () => {
  return http.get("/topic");
};

const get = id => {
  return http.get(`/topic/${id}`);
};

const create = data => {
  return http.post("/topic", data);
};

const update = (id, data) => {
  return http.put(`/topic/${id}`, data);
};

const remove = id => {
  return http.delete(`/topic/${id}`);
};

const removeAll = () => {
  return http.delete(`/topic`);
};

const findByTitle = searchTitle => {
  return http.get(`/topic/${searchTitle}`);
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