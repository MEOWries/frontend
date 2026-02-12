import axiosInstance from "../helpers/axiosHelper.js";

export const DonorServices = {
  completeDonorProfile: async (payloads) => {
    try {
      const res = await axiosInstance.post("/donor/complete-profile", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDonorProfile: async (payloads) => {
    try {
      const res = await axiosInstance.get("/donor/get-profile", payloads);
      const d =  res.data.data;
      return d.user_details
    } catch (err) {
      console.error(err);
    }
  },
  toggleDonorAvailability: async (payloads) => {
    try {
      const res = await axiosInstance.patch("/donor/availability", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  donorDashboard: async (payloads) => {
    try {
      const res = await axiosInstance.get("/donor/dashboard", payloads);
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  acceptRequest: async (donorId, rId) => {
    try {
      const res = await axiosInstance.post(
        `/donor/${donorId}/blood-requests/${rId}/accept`,
      );
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  declineRequest: async (donorId, rId) => {
    try {
      const res = await axiosInstance.post(
        `/donor/${donorId}/blood-requests/${rId}/decline`,
      );
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  getRequestsForDonor: async(donorId)=>{
    try {
      const res = await axiosInstance.get(`/donor/getRequestForDonor/${donorId}`)
      return res.data.data;
    } catch (error) {
      console.error(error)
    }
  },
  getDonorAcceptedRequest: async(reqId)=>{
    try {
      const res = await axiosInstance.get(`/organization/blood-requests/${reqId}`)
      return res.data.data
    } catch (error) {
      console.error(error)
    }
  }
};


