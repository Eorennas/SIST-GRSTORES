import axios from "axios";

const api = axios.create({
    baseURL: "http://26.11.210.109:3333",
});

export default api;
