import axios from "axios";
const BASE_URL = "https://leaderboard-moh6.onrender.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


