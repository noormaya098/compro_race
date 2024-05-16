import axios from "axios";
import { create } from "zustand";

export const baseUrl = "https://apirace.eurekalogistics.co.id/"
export const BannerStore = create((set) => ({
    banner: [],
    GetBanner: async () => {
        try {
            const response = await axios.get(`${baseUrl}banner/get-banner-web`);
            console.log(response.data.data);
            set({banner : response.data.data})
            return response;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}));
