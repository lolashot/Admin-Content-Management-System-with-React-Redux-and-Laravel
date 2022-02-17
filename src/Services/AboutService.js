import http from "../http-common";





const getAll = () => {
  return http.get("/about");
};

const get = id => {
  return http.get(`/about/${id}`);
};

const create = data => {
  return http.post("/about", data);
};

const update = (id, data) => {
  return http.put(`/about/${id}`, data);
};

const remove = id => {
  return http.delete(`/about/${id}`);
};

const removeAll = () => {
  return http.delete(`/about`);
};

const findByTitle = searchTitle => {
  return http.get(`/about/${searchTitle}`);
};

const AboutDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default AboutDataService;