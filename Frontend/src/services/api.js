import axios from "axios";

const api = axios.create({
    baseURL: "https://url-shortner-h2wp.onrender.com",
    withCredentials: false
})

export default api