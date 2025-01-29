import { getInformation, postInformation } from "@/api/apiService";
import { create } from "zustand";

const useUserStore = create((set) => ({
    user: {},
    setUser: (data) => set({ user: data }),
    hasUser: false,
    postUser: (data) => {
        set({ user: postInformation(data), hasUser: true });
    },
    getUser: () => {
        set({ user: getInformation(), hasUser: true });
    },
}));

export default useUserStore;
