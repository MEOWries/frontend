import React, { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { organizationService } from "../../services/OrganizationService";
import useMyContext from "../../hooks/UseMyContext";

const DonorMatches = () => {
  const { profile } = useMyContext();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    if (!profile?.organization?._id) return;

    const fetchDonations = async () => {
      setLoading(true);
      try {
        const res = await organizationService.getDonationRequests(
          profile.organization._id
        );
        setDonations(res.donations);
      } catch {
        alert("Failed to load donation requests");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, [profile?.organization?._id]);

  const confirmDonation = async (id) => {
    setUpdatingId(id);
    try {
      await organizationService.confirmDonationRequest(id);
      setDonations((prev) =>
        prev.map((d) =>
          d.id === id ? { ...d, status: "confirmed" } : d
        )
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const declineDonation = async (id) => {
    setUpdatingId(id);
    try {
      await organizationService.cancelDonationRequest(id);
      setDonations((prev) =>
        prev.map((d) =>
          d.id === id ? { ...d, status: "rejected" } : d
        )
      );
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-black text-brand-slate-900">
          Donor Matches
        </h1>
        <p className="text-brand-slate-500 text-sm">
          Donation requests received from nearby donors.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-brand-slate-200 border-t-brand-red-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Empty */}
      {!loading && donations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <AlertTriangle size={32} className="text-brand-slate-300 mb-4" />
          <h3 className="font-bold text-brand-slate-900 mb-1">
            No donation requests
          </h3>
          <p className="text-sm text-brand-slate-500">
            Donors have not responded yet.
          </p>
        </div>
      )}

      {/* Cards */}
      {!loading && donations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {donations.map((d) => {
            const donor = d.donor;
            const request = d.request;
            const showActions =
              d.status !== "confirmed" && d.status !== "rejected";

            return (
              <div
                key={d.id}
                className="bg-white rounded-3xl p-6 border border-brand-slate-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-slate-50 rounded-bl-full -mr-4 -mt-4"></div>

                <div className="relative z-10 space-y-5">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-red-600 text-white flex items-center justify-center font-black text-lg">
                        {donor.blood_group}
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-slate-900">
                          {donor.full_name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-brand-slate-500">
                          <MapPin size={12} /> Request:{" "}
                          {request.patient_reference}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-slate-100 text-brand-slate-600">
                      {d.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Donor Age
                      </span>
                      <span className="font-bold">{donor.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Weight
                      </span>
                      <span className="font-bold">{donor.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Total Donations
                      </span>
                      <span className="font-bold">
                        {donor.total_donations}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-slate-400 font-bold uppercase">
                        Last Donated
                      </span>
                      <span className="font-medium">
                        {donor.last_donation_date
                          ? new Date(
                              donor.last_donation_date
                            ).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  {showActions && (
                    <div className="flex gap-3 pt-2">
                      <button
                        disabled={updatingId === d.id}
                        onClick={() => confirmDonation(d.id)}
                        className="flex-1 bg-emerald-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle size={14} /> Confirm
                      </button>

                      <button
                        disabled={updatingId === d.id}
                        onClick={() => declineDonation(d.id)}
                        className="flex-1 bg-red-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
                      >
                        <XCircle size={14} /> Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DonorMatches;
