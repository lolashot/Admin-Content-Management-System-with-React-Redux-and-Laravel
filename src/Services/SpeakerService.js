import http from "../http-common";



const getAll = () => {
  return http.get("/speaker");
};

const get = id => {
  return http.get(`/speaker/${id}`);
};

const create = (item_id, data) => {
  return http.post(`/item/${item_id}/speaker`, data);
};

const update = (id, data) => {
  return http.put(`/speaker/${id}`, data);
};

const remove = id => {
  return http.delete(`/speaker/${id}`);
};

const removeAll = () => {
  return http.delete(`/speaker`);
};

const findByTitle = searchTitle => {
  return http.get(`/speaker/${searchTitle}`);
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