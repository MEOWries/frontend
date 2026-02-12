import axiosInstance from "../helpers/axiosHelper";

export const organizationService = {
  completeOrganizationProfile: async (payload) => {
    try {
      const res = await axiosInstance.post(
        "/organization/complete-profile",
        payload,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  getOrganizationProfile: async () => {
    try {
      const res = await axiosInstance.get("/organization/get-profile");
      const d = res.data.data;
      return d.user_details;
    } catch (error) {
      console.error(error);
    }
  },
  createRequest: async (payload, orgId) => {
    try {
      const res = await axiosInstance.post(
        `/organization/${orgId}/blood-requests`,
        payload,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  getRequests: async (payload, orgId) => {
    try {
      const res = await axiosInstance.get(
        `/organization/${orgId}/blood-requests`,
        payload,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  getDonationRequests: async (orgId) => {
    try {
      const res = await axiosInstance.get(
        `/organization/${orgId}/donation-requests`
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  getRequestById: async (rId) => {
    try {
      const res = await axiosInstance.get(
        `/organization/blood-requests/${rId}`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  startBloodRequest: async (rId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/blood-requests/${rId}/start`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  completeBloodRequest: async (rId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/blood-requests/${rId}/complete`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  cancelBloodRequest: async (rId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/blood-requests/${rId}/cancel`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
      throw error
    }
  },
  confirmDonationRequest: async (dReqId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/donation-requests/${dReqId}/confirm`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  cancelDonationRequest: async (dReqId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/donation-requests/${dReqId}/reject`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  updateDonorDetails: async (donorId) => {
    try {
      const res = await axiosInstance.put(`/organization/donor/${donorId}`);
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  blacklistDonor: async (donorId) => {
    try {
      const res = await axiosInstance.patch(`/organization/donor/${donorId}`);
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },
  getDonorProfile: async (uId, donorId) => {
    try {
      const res = await axiosInstance.patch(
        `/organization/user/${uId}/donor/${donorId}`,
      );
      const d = res.data.data;
      return d;
    } catch (error) {
      console.error(error);
    }
  },

  getDashStats: async (orgId) => {
    try {
      const res = await axiosInstance.get(`/organization/${orgId}/stats`);
      const d = res.data.data;
      return d.stats;
    } catch (error) {
      console.error(error);
    }
  },
};
