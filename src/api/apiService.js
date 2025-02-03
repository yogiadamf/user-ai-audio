import Cookies from "js-cookie";
import apiInstance from "./apiInstance";

export const postInformation = (data) => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to next midnight (00:00)

    // Calculate the difference in milliseconds and convert to days
    const timeUntilMidnight = (midnight - now) / 1000 / 60 / 60 / 24;

    Cookies.set("user_information", JSON.stringify(data), {
        secure: true,
        sameSite: "strict",
        expires: timeUntilMidnight,
    });
    return data;
};

export const getInformation = () => {
    const information = Cookies.get("user_information");
    return information ? JSON.parse(information) : null;
};

export const deleteInformation = () => {
    Cookies.remove("user_information");
};

export const postAudio = async (data) => {
   await apiInstance.post("/store-audio", data);
};