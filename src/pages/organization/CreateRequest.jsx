import React, { useState } from "react";
import { Droplet, MapPin, AlertCircle } from "lucide-react";
import { Input } from "../../components/common/FormComponents";
import { organizationService } from "../../services/OrganizationService";
import useMyContext from "../../hooks/UseMyContext";

const CreateRequest = () => {
  const [urgency, setUrgency] = useState("Normal");
  const [bg, setBg] = useState("");
  const [pid, setPid] = useState("");
  const [q, setQ] = useState("");
  const [address, setAddress] = useState("");
  const { profile } = useMyContext();

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const payload = {
        bg,
        qu: q,
        u: urgency.toLowerCase(),
        lo: address,
        pn: pid,
      };
      const res = await organizationService.createRequest(
        payload,
        profile.organization._id,
      );
      alert("Blood requested successfully!");
      setUrgency("Normal");
      setBg("");
      setPid("");
      setQ("");
      setAddress("");
    } catch (error) {
      alert("Error occured!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-brand-slate-900">
          Create New Request
        </h1>
        <p className="text-brand-slate-500 text-sm">
          Broadcast a new blood requirement to eligible donors nearby.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-brand-slate-100 shadow-xl overflow-hidden">
        <div className="h-1.5 w-full bg-brand-slate-50">
          <div className="h-full w-1/3 bg-brand-red-600 rounded-r-full"></div>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-red-50 text-brand-red-600 rounded-lg">
                <Droplet size={20} />
              </div>
              <h3 className="font-bold text-lg text-brand-slate-900">
                Patient & Blood Details
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Patient Reference ID"
                placeholder="e.g. PID-99281"
                onChange={(e) => setPid(e.target.value)}
              />

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
                  Blood Group
                </label>
                <select
                  value={bg}
                  onChange={(e) => setBg(e.target.value)}
                  className="w-full bg-brand-slate-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-brand-slate-900 focus:ring-2 focus:ring-brand-red-600/20 outline-none appearance-none"
                >
                  <option value="">Select Type</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                    (t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <Input
                label="Required Units"
                type="number"
                min={1}
                max={20}
                onChange={(e) => setQ(e.target.value)}
                placeholder="eg. 2"
              />
            </div>
          </section>

          <hr className="border-brand-slate-100" />

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-slate-100 text-brand-slate-600 rounded-lg">
                <AlertCircle size={20} />
              </div>
              <h3 className="font-bold text-lg text-brand-slate-900">
                Urgency & Location
              </h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {["Normal", "High", "Critical"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setUrgency(level)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        urgency === level
                          ? level === "Critical"
                            ? "bg-brand-red-600 border-brand-red-600 text-white"
                            : "bg-brand-slate-900 border-brand-slate-900 text-white"
                          : "bg-white border-brand-slate-200 text-brand-slate-500 hover:border-brand-slate-400"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <Input
                label="Hospital Location / Room No."
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. City Hospital, ICU Wing B"
              />
            </div>
          </section>

          <div className="pt-4">
            <button
              onClick={() => handleSubmit()}
              disabled={submitting}
              className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-brand-red-600/20 hover:shadow-brand-red-600/40 hover:-translate-y-1"
            >
              {submitting ? "Publishing" : "Publish Request"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
