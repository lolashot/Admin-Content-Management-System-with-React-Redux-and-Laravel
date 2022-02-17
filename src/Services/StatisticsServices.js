import http from "../http-common";



const getAll = () => {
  return http.get("/statistic");
};

const get = id => {
  return http.get(`/statistic/${id}`);
};

const create = data => {
  return http.post("/statistic", data);
};

const update = (id, data) => {
  return http.put(`/statistic/${id}`, data);
};

const remove = id => {
  return http.delete(`/statistic/${id}`);
};

const removeAll = () => {
  return http.delete(`/statistic`);
};

const findByTitle = searchTitle => {
  return http.get(`/statistic/${searchTitle}`);
};


const StatisticsDataService= {
  getAll,
   get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};


 export default StatisticsDataService;