import http from "../http-common";



const getAll = () => {
  return http.get("/volunteer");
};

const get = id => {
  return http.get(`/volunteer/${id}`);
};

const create = (item_id, data) => {
  return http.post(`/item/${item_id}/volunteer`, data);
};

const update = (id, data) => {
  return http.put(`/volunteer/${id}`, data);
};

const remove = id => {
  return http.delete(`/volunteer/${id}`);
};

const removeAll = () => {
  return http.delete(`/volunteer`);
};

const findByTitle = searchTitle => {
  return http.get(`/volunteer/${searchTitle}`);
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