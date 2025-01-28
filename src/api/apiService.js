import Cookies from "js-cookie";

export const postInformation = (data) => {
    Cookies.set("user_information", JSON.stringify(data), {
        secure: true,
        sameSite: "strict",
        expires: 1
    });
};

export const getInformation = () => {
    const information = Cookies.get("user_information");
    return information ? JSON.parse(information) : null;
};

export const deleteInformation = () => {
    Cookies.remove("user_information");
};