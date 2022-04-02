import http from "../http-common";





const getAll = () => {
  return http.get("/item");
};

const get = id => {
  return http.get(`/item/${id}`);
};

const create = (event_id, data) => {
  return http.post(`/event/${event_id}/item`, data);
};

const update = (id, data) => {
  return http.put(`/item/${id}`, data);
};

const remove = id => {
  return http.delete(`/item/${id}`);
};

const removeAll = () => {
  return http.delete(`/item/`);
};

const findByTitle = searchTitle => {
  return http.get(`/item/${searchTitle}`);
};

const ItemDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default ItemDataService;