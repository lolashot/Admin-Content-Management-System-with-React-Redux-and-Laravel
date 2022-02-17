import http from "../http-common";

const getAll = () => {
  return http.get("/event");
};

const get = id => {
  return http.get(`/event/${id}`);
};

const create = data => {
  return http.post("/event", data);
};

const update = (id, data) => {
  return http.put(`/event/${id}`, data);
};

const remove = id => {
  return http.delete(`/eventdetails/${id}`);
};

const removeAll = () => {
  return http.delete(`/eventdetails`);
};

const findByTitle = searchTitle => {
  return http.get(`/eventdetails/${searchTitle}`);
};


const EventDetailsDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default EventDetailsDataService;