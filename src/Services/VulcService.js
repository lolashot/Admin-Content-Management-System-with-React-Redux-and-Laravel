import http from "../http-common";



const getAll = () => {
  return http.get("/vulc");
};

const get = id => {
  return http.get(`/vulc/${id}`);
};

const create = (item_id, data) => {
  return http.post(`/vulc/${item_id}/speaker`, data);
};

const update = (id, data) => {
  return http.put(`/vulc/${id}`, data);
};

const remove = id => {
  return http.delete(`/vulc/${id}`);
};

const removeAll = () => {
  return http.delete(`/vulc`);
};

const findByTitle = searchTitle => {
  return http.get(`/vulc/${searchTitle}`);
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