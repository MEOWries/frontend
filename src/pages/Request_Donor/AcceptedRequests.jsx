import React, { useState, useEffect } from 'react'
import { RequestCard } from '../../components/common/RequestsComponents';
import useMyContext from '../../hooks/UseMyContext';
import { DonorServices } from '../../services/DonorServices';

function AcceptedRequests() {
  const { acceptedRequestId  } = useMyContext();
  const [loading, setLoading] = useState(true);
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  useEffect(() => {
    const getAcceptedRequestsData = async () => {
      if (!acceptedRequestId || acceptedRequestId.length === 0) {
        setLoading(false);
        return;
      }
      try {
        const requests = await Promise.all(
          acceptedRequestId.map((id) => DonorServices.getRequestById(id))
        );
        setAcceptedRequests(requests);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getAcceptedRequestsData();
  }, [acceptedRequestId]);

  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      {loading ? (
        <div>Loading</div>
      ) : acceptedRequests.length > 0 ? (
        acceptedRequests.map((req) => (
          <RequestCard key={req._id} data={req} isAcceptedView={true}>
            {/* <button className="w-full bg-brand-slate-100 text-brand-slate-400 text-[10px] font-black uppercase tracking-widest py-3 rounded-xl border border-brand-slate-200 hover:bg-brand-red-50 hover:text-brand-red-600 hover:border-brand-red-200 transition-all active:scale-95 group">
              Cancel Donation
            </button> */}
          </RequestCard>
        ))
      ) : (
        <div>No accepted requests yet</div>
      )}
    </div>
  )
}

export default AcceptedRequests