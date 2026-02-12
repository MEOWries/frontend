import axiosInstance from "../helpers/axiosHelper.js";

export const DonorServices = {
  completeDonorProfile: async (payloads) => {
    try {
      const res = await axiosInstance.post("/complete-profile", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDonorProfile: async (payloads) => {
    try {
      const res = await axiosInstance.get("/get-profile", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  toggleDonorAvailability: async (payloads) => {
    try {
      const res = await axiosInstance.patch("/availability", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  donorDashboard: async (payloads) => {
    try {
      const res = await axiosInstance.get("/dashboard", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  acceptRequest: async (donorId, rId) => {
    try {
      const res = await axiosInstance.post(
        `/${donorId}/blood-requests/${rId}/accept`,
      );
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  declineRequest: async (donorId, rId) => {
    try {
      const res = await axiosInstance.post(
        `/${donorId}/blood-requests/${rId}/decline`,
      );
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
};
