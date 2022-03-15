import http from "../http-common";

const getAll = () => {
  return http.get("/attendee");
};

const get = id => {
  return http.get(`/attendee/${id}`);
};

const create = data => {
  return http.post("/attendee", data);
};

const update = (id, data) => {
  return http.put(`/attendee/${id}`, data);
};

const remove = id => {
  return http.delete(`/attendee/${id}`);
};

const removeAll = () => {
  return http.delete(`/attendee`);
};

const findByTitle = searchTitle => {
  return http.get(`/attendee/${searchTitle}`);
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