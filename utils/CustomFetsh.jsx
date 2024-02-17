import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const customFetch = axios.create({
  baseURL: `${apiUrl}/api/v1/`,
});

export default customFetch;
