import axios from "axios";

const apiUrl = `${window.VITE_API_URL}api/v1`;

// const apiUrl = `${import.meta.env.VITE_API_URL}api/v1`;
console.log(apiUrl);
const customFetch = axios.create({
  baseURL: `${apiUrl}/`,
});

export default customFetch;

