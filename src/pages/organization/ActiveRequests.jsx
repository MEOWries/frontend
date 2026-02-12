import React, { useEffect, useState } from "react";
import {
  MapPin,
  AlertTriangle,
  RefreshCcw,
  Play,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { Eye, X } from "lucide-react";

import { organizationService } from "../../services/OrganizationService";
import useMyContext from "../../hooks/UseMyContext";

const RequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const { profile } = useMyContext();
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const res = await organizationService.getRequests(
          {},
          profile.organization._id,
        );
        setRequests(res.requests);
      } catch (error) {
        alert("Error fetching requests!");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const viewDetails = async (reqId) => {
    setDetailsLoading(true);
    setShowModal(true);

    try {
      const res = await organizationService.getRequestById(reqId);
      setSelectedRequest(res);
    } catch (err) {
      alert("Failed to load request details");
      setShowModal(false);
    } finally {
      setDetailsLoading(false);
    }
  };

  const startRequest = async (rId) => {
    setUpdatingId(rId);
    try {
      const res = await organizationService.startBloodRequest(rId);
      alert("Blood request started!");
    } catch (error) {
      alert("Error starting request!");
    } finally {
      setUpdatingId(null);
    }
  };

  const cancelRequest = async (rId) => {
    setUpdatingId(rId);
    try {
      const res = await organizationService.cancelBloodRequest(rId);
      alert("Blood request cancelled!");
    } catch (error) {
      alert("Error cancelling request!");
    } finally {
      setUpdatingId(null);
    }
  };

  const completeRequest = async (rId) => {
    setUpdatingId(rId);
    try {
      const res = await organizationService.completeBloodRequest(rId);
      alert("Blood request cancelled!");
    } catch (error) {
      alert("Error cancelling request!");
    } finally {
      setUpdatingId(null);
    }
  };

  const rematchRequest = async () => {};

  return (
    <div className="space-y-6 animate-fade-in relative">
      <div>
        <h1 className="text-2xl font-black text-brand-slate-900">
          Blood Requests
        </h1>
        <p className="text-brand-slate-500 text-sm">
          Manage and track active blood requests.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-brand-slate-200 border-t-brand-red-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && requests.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <AlertTriangle size={32} className="text-brand-slate-300 mb-4" />
          <h3 className="font-bold text-brand-slate-900 mb-1">
            No requests found
          </h3>
          <p className="text-sm text-brand-slate-500">
            Create a blood request to get started.
          </p>
        </div>
      )}

      {!loading && requests.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {requests.map((req) => {
            const canRematch = req.scannedDistance < 25;

            return (
              <div
                key={req.id}
                className="bg-white rounded-3xl p-6 border border-brand-slate-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-slate-50 rounded-bl-full -mr-4 -mt-4"></div>

                <div className="relative z-10 space-y-5">
                  {/* Header */}
                  <div className="flex justify-around items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-red-600 text-white flex items-center justify-center font-black text-lg">
                        {req.blood_group}
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-slate-900">
                          {req.patient_reference}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-brand-slate-500 font-medium">
                          <MapPin size={12} /> {req.scannedDistance} km radius
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        req.urgency === "critical"
                          ? "bg-red-100 text-red-700"
                          : req.urgency === "high"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {req.urgency.toUpperCase()}
                    </span>
                    <button
                      onClick={() => viewDetails(req.id)}
                      className="text-brand-slate-300 hover:text-brand-slate-900 transition"
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Units Needed
                      </span>
                      <span className="font-bold text-brand-slate-900">
                        {req.quantity_units}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Confirmed
                      </span>
                      <span className="font-bold text-brand-slate-900">
                        {req.confirmed_units}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Status
                      </span>
                      <span className="font-bold text-brand-slate-700">
                        {req.status}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {canRematch && (
                      <button
                        onClick={() => rematchRequest(req.id)}
                        className="flex-1 bg-brand-slate-900 text-white py-2 rounded-xl text-xs font-bold hover:bg-brand-red-600 transition flex items-center justify-center gap-2"
                      >
                        <RefreshCcw size={14} /> Rematch
                      </button>
                    )}

                    {req.status === "open" && (
                      <button
                        disabled={updatingId == req.id}
                        onClick={() => startRequest(req.id)}
                        className="flex-1 bg-emerald-600 text-white py-2 rounded-xl text-xs font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                      >
                        <Play size={14} />{" "}
                        {updatingId == req.id ? "Starting..." : "Start"}
                      </button>
                    )}

                    {req.status === "in_progress" && (
                      <button
                        disabled={updatingId == req.id}
                        onClick={() => completeRequest(req.id)}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={14} />{" "}
                        {updatingId == req.id ? "Completing" : "Complete"}
                      </button>
                    )}

                    {req.status === "completed" && (
                      <button
                        disabled
                        onClick={() => completeRequest(req.id)}
                        className="flex-1 bg-gray-400 text-gray-800 py-2 rounded-xl text-xs font-bold cursor-not-allowed transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={14} /> Completed
                      </button>
                    )}

                    {req.status !== "completed" && (
                      <button
                        diabled={updatingId == req.id}
                        onClick={() => cancelRequest(req.id)}
                        className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition flex items-center justify-center"
                      >
                        <XCircle size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          ></div>

          {/* Modal */}
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-xl p-6 z-10 animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-brand-slate-400 hover:text-brand-slate-900"
            >
              <X size={20} />
            </button>

            {detailsLoading && (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-brand-slate-200 border-t-brand-red-600 rounded-full animate-spin"></div>
              </div>
            )}

            {!detailsLoading && selectedRequest && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-red-600 text-white flex items-center justify-center font-black text-xl">
                    {selectedRequest.blood_group}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-brand-slate-900">
                      {selectedRequest.patient_reference}
                    </h2>
                    <p className="text-sm text-brand-slate-500">
                      Status: {selectedRequest.status}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-brand-slate-400 font-bold uppercase text-xs">
                      Units Required
                    </span>
                    <p className="font-bold">
                      {selectedRequest.quantity_units}
                    </p>
                  </div>
                  <div>
                    <span className="text-brand-slate-400 font-bold uppercase text-xs">
                      Urgency
                    </span>
                    <p className="font-bold">{selectedRequest.urgency}</p>
                  </div>
                  <div>
                    <span className="text-brand-slate-400 font-bold uppercase text-xs">
                      Created At
                    </span>
                    <p className="font-medium">
                      {new Date(selectedRequest.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Donors */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-brand-slate-900 mb-2">
                      Matched Donors
                    </h4>
                    {selectedRequest.matched_donor_ids?.length > 0 ? (
                      <ul className="space-y-2 text-sm">
                        {selectedRequest.matched_donor_ids.map((d) => (
                          <li
                            key={d._id}
                            className="flex justify-between bg-brand-slate-50 px-4 py-2 rounded-xl"
                          >
                            <span className="font-medium">{d.full_name}</span>
                            <span className="font-bold">{d.blood_group}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-brand-slate-400">
                        No matched donors yet
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-slate-900 mb-2">
                      Accepted Donors
                    </h4>
                    {selectedRequest.accepted_donor_id?.length > 0 ? (
                      <ul className="space-y-2 text-sm">
                        {selectedRequest.accepted_donor_id.map((d) => (
                          <li
                            key={d._id}
                            className="flex justify-between bg-emerald-50 px-4 py-2 rounded-xl"
                          >
                            <span className="font-medium">{d.full_name}</span>
                            <span className="font-bold">{d.blood_group}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-brand-slate-400">
                        No accepted donors
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestsPage;
