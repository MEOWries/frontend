import React, { useEffect } from "react";
import { RequestCard } from "../../components/common/RequestsComponents";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { DonorServices } from "../../services/DonorServices";
import useMyContext from "../../hooks/UseMyContext";

function AssignedRequests() {
  const { profile, setAcceptedRequestsId } = useMyContext();
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async (donorId) => {
      try {
        console.log(profile);
        const response = await DonorServices.getRequestsForDonor(donorId);
        setRequests(response);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getRequests(profile.donor._id);
  }, []);

  const acceptRequest = async (req) => {
    await DonorServices.acceptRequest(profile.donor._id, req._id);
    setRequests(requests.filter((request) => request._id !== req._id));
    setAcceptedRequestsId(req._id);
  };

  const declineRequest = async (req) => {
    await DonorServices.declineRequest(profile.donor._id, req._id);
    setRequests(requests.filter((request) => request._id !== req._id));
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {loading ? (
        <div>Loading</div>
      ) : requests[0] ? (
        requests.map((req) => (
          <RequestCard key={req.id} data={req}>
            <button
              onClick={() => declineRequest(req)}
              className="flex-1 bg-brand-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-brand-slate-800 transition-all active:scale-95"
            >
              Unavailable
            </button>
            <button
              onClick={() => acceptRequest(req)}
              className="flex-2 bg-brand-red-600 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:shadow-lg hover:shadow-brand-red-600/30 transition-all active:scale-95"
            >
              Accept Request
            </button>
          </RequestCard>
        ))
      ) : (
        <div>No requests yet</div>
      )}
    </div>
  );
}

export default AssignedRequests;
