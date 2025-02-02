import axios from "axios";
import { BASE_URL_BE } from "@/constants/url";

const apiInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: BASE_URL_BE,
    withCredentials: true,
});

apiInstance.interceptors.request.use(config => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }

    return config;
}, error => {
    return Promise.reject(error);
});

export default apiInstance;