import axios from "axios";
import { BASE_URL_BE } from "@/constants/url";

export const apiInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: BASE_URL_BE,
    withCredentials: true,
});
