import axiosInstance from "../helpers/axiosHelper";

export const authService = {
  login: async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/login", payload);
      const d = res.data.data;
      return d.user;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  register: async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/register/user", payload);
    } catch (error) {
      console.error(error);
    }
  },

  checkAuthStatus: async () => {
    try {
      const res = await axiosInstance.get("/auth/check-auth");
      const user = res.data.data;
      return user;
    } catch (error) {
      console.error(error);
    }
  },
};
