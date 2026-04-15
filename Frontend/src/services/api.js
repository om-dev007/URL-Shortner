import axios from "axios";

const api = axios.create({
    baseURL: "https://url-shortner-production-ca2f.up.railway.app/api",
    withCredentials: false
})

export default api