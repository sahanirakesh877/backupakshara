import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const getHeroPhoto = () => API.get("/hero-photo");