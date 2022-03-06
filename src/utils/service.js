import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const service = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: window.location.protocol + "//" + window.location.hostname
});

export default service;
