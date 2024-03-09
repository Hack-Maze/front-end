import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const apiUrl = `${process.env.VITE_API_URL}`;

console.log(apiUrl);
const customFetch = axios.create({
  baseURL: `${apiUrl}/`,
});

export default customFetch;
