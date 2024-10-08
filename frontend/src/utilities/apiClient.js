import axios from "axios";

const BASE_URL = "https://ca-memobanking.onrender.com"

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((request) => {
    const localToken = localStorage.getItem("token");
    
    if (localToken) {
        request.headers.Authorization = `Bearer ${localToken}`;
    }

    return request
});


export default api