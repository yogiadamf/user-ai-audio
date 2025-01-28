import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { BASE_URL_BE } from "@/constants/url";
import { decryptData } from "@/utils/crypto";

const Api = axios.create({
    xsrfHeaderName: "X-CSRF-Token",
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: BASE_URL_BE,
    withCredentials: true,
});

Api.interceptors.request.use(
    (config) => {
        const token = `Bearer ${decryptData(Cookies.get("access_token")).access_token
            }`;
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                Cookies.remove("access_token");
                Cookies.remove("data");
                location.href = "/login";
            }
        }
        const errorMessages =
            error.response?.data?.message ?? error.message ?? "Something went wrong";
        toast.error(errorMessages);
        return Promise.reject(error);
    }
);

export default Api;
