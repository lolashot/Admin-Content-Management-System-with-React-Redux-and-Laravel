import http from "../http-common";

const getAll = () => {
  return http.get("/upcomingevents");
};

const get = id => {
  return http.get(`/upcomingevents/${id}`);
};

const create = data => {
  return http.post("/upcomingevents", data);
};

const update = (id, data) => {
  return http.put(`/upcomingevents/${id}`, data);
};

const remove = id => {
  return http.delete(`/upcomingevents/${id}`);
};

const removeAll = () => {
  return http.delete(`/upcomingevents`);
};

const findByTitle = searchTitle => {
  return http.get(`/upcomingevents/${searchTitle}`);
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