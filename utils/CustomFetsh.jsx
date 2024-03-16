import axios from "axios";
// import config from "../config";

const apiUrl = `${window.VITE_API_URL}api/v1`;

console.log(apiUrl);
const customFetch = axios.create({
  baseURL: `${apiUrl}/`,
});

export default customFetch;
