import axiosInstance from "../helpers/axiosHelper";
import { DonorServices } from "./DonorServices";
import { organizationService } from "./OrganizationService";

export const authService = {
  login: async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/login", payload);
      const d = res.data.data;
      return d.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  register: async (payload) => {
    try {
      const res = await axiosInstance.post("/auth/register/user", payload);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  checkAuthStatus: async () => {
    try {
      const res = await axiosInstance.get("/auth/check-auth");
      const user = res.data.data.user;
      let res1 = null;
      if (user) {
        if (user.role == "donor") {
          res1 = await DonorServices.getDonorProfile();
        } else {
          res1 = await organizationService.getOrganizationProfile();
        }
      }
      return { user, profile: res1 };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
