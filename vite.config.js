import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
const apiUrl = `${process.env.VITE_API_URL}`;
// const apiUrl = `https://${process.env.VITE_BACKEND_HOST}:${process.env.VITE_BACKEND_PORT}`;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: apiUrl,
      },
    },
  },
});
