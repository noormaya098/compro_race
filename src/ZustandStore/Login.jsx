import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "./Banner";

export const LoginApiMarcom = create((set) => ({
    LoginApi: async (username, password) => {
        const body = {
            "username": username,
            "password": password
        }
        try {
            const response = await axios.post(`${baseUrl}auth/login`, body);
            console.log(response.data.data);
            return response;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}));
