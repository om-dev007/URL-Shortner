import axios from "axios";

const api = axios.create({
    baseURL: "https://trimly-back.vercel.app/",
    withCredentials: false
})

export default api