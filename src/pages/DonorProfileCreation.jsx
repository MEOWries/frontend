import React, { useState } from "react";
import {
  Card,
  ChoiceButton,
  Disclaimer,
  Input,
  ModernInput,
  StepLabel,
} from "../components/common/FormComponents";

function CreateDonorProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    bloodGroup: "",
    age: 18,
    weight: 0,
    hasIllness: null,
    hasTattoos: null,
    hasDrugs: null,
  });

  const isPhysicallyFit = formData.age >= 18 && formData.age <= 65 && formData.weight >= 50;
  const isMedicallyFit = formData.hasIllness === false && formData.hasTattoos === false && formData.hasDrugs === false;
  return (
   <div className="min-h-screen bg-brand-slate-50 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,var(--color-brand-red-100)_0%,transparent_25%)]">
      
      {/* Floating Glass Card */}
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-glass overflow-hidden animate-fade-in">
        
        {/* Animated Progress Header */}
        <div className="relative h-2 bg-brand-slate-100">
          <div 
            className="absolute h-full bg-brand-red-600 transition-all duration-1000 ease-in-out"
            style={{ width: isPhysicallyFit ? (isMedicallyFit ? '100%' : '66%') : '33%' }}
          />
        </div>

        <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto">
          <header className="mb-10">
            <span className="text-brand-red-600 font-bold text-xs uppercase tracking-[0.2em]">Donor Profile</span>
            <h1 className="text-4xl font-black text-brand-slate-900 mt-2 tracking-tight">Eligibility <span className="text-brand-red-600">Screener.</span></h1>
          </header>

          <div className="space-y-12">
            
            {/* Phase 1: Identity & Physics */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-red-600 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-red-600/30">1</div>
                <h3 className="text-xl font-bold text-brand-slate-900">Physical Metrics</h3>
              </div>

              <div className="grid gap-6">
                <ModernInput label="Full Name" placeholder="Enter your legal name" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-brand-slate-500 uppercase tracking-wider">Blood Type</label>
                    <select className="w-full bg-brand-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-red-600/20 transition-all outline-none appearance-none" onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}>
                      <option value="">Select</option>
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <ModernInput label="Weight (KG)" type="number" placeholder="Minimum weight is 50 kg" onChange={(e) => setFormData({...formData, weight: parseInt(e.target.value)})} />
                </div>

                <div className="bg-brand-slate-50 p-6 rounded-3xl">
                  <div className="flex justify-between mb-4">
                    <label className="text-[11px] font-bold text-brand-slate-500 uppercase tracking-wider">Donor Age {"(at least 18 years and cannot be over 65 years)"}</label>
                    <span className="text-brand-red-600 font-bold">{formData.age} Years</span>
                  </div>
                  <input type="range" min="18" max="65" value={formData.age} onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})} className="w-full accent-brand-red-600" />
                </div>
              </div>

              {!isPhysicallyFit && formData.weight > 0 && (
                <div className="animate-shake">
                   <Disclaimer message="Required: Age 18-65 and Weight 50kg+ to proceed." />
                </div>
              )}
            </section>

            {/* Phase 2: Medical Declaration (Reveals smoothly) */}
            <section className={`space-y-6 transition-all duration-700 ${!isPhysicallyFit ? 'opacity-10 grayscale pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-slate-900 flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-brand-slate-900">Health Status</h3>
              </div>

              <div className="bg-brand-slate-900 rounded-4xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">✚</div>
                <p className="text-xs font-bold text-brand-slate-400 uppercase tracking-widest mb-4">Deferral Conditions</p>
                <div className="grid grid-cols-2 gap-3 text-[11px] text-brand-slate-300">
                  <div className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-brand-red-600 rounded-full"/> HIV / Hepatitis</div>
                  <div className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-brand-red-600 rounded-full"/> Cancer</div>
                  <div className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-brand-red-600 rounded-full"/> Heart/Kidney Disease</div>
                  <div className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-brand-red-600 rounded-full"/> Prion Diseases</div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <span className="text-sm font-medium">Do you have any listed illness?</span>
                  <div className="flex bg-white/10 p-1.5 rounded-xl backdrop-blur-md">
                    <button onClick={() => setFormData({...formData, hasIllness: true})} className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${formData.hasIllness === true ? 'bg-brand-red-600 text-white' : 'text-white/60 hover:text-white'}`}>YES</button>
                    <button onClick={() => setFormData({...formData, hasIllness: false})} className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${formData.hasIllness === false ? 'bg-white text-brand-slate-950' : 'text-white/60 hover:text-white'}`}>NO</button>
                  </div>
                </div>
              </div>

              {formData.hasIllness === false && (
                <div className="grid gap-4 animate-fade-in-up">
                  {/* Tattoos & Drugs Selectors */}
                  {[
                    { key: 'hasTattoos', label: 'Tattoos / Piercings (6mo)' },
                    { key: 'hasDrugs', label: 'Recreational Drug Use' }
                  ].map(item => (
                    <div key={item.key} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white border border-brand-slate-100 rounded-2xl shadow-sm gap-5 md:gap-0">
                      <span className="text-sm font-semibold text-brand-slate-700">{item.label}</span>
                      <div className="flex bg-brand-slate-50 p-1 rounded-xl">
                        <button onClick={() => setFormData({...formData, [item.key]: true})} className={`px-5 py-1.5 text-[10px] font-black rounded-lg transition-all ${formData[item.key] === true ? 'bg-brand-red-600 text-white' : 'text-brand-slate-400'}`}>YES</button>
                        <button onClick={() => setFormData({...formData, [item.key]: false})} className={`px-5 py-1.5 text-[10px] font-black rounded-lg transition-all ${formData[item.key] === false ? 'bg-brand-slate-900 text-white' : 'text-brand-slate-400'}`}>NO</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Dynamic Action Footer */}
        <div className="p-8 bg-brand-slate-50/50 backdrop-blur-md border-t border-brand-slate-100">
          {formData.hasIllness === true || formData.hasTattoos === true || formData.hasDrugs === true || !isPhysicallyFit ? (
            <div className="text-center py-2 text-brand-red-600 font-bold text-sm animate-shake">
              Medical Deferral: You are currently ineligible.
            </div>
          ) : (
            <button 
              disabled={!isMedicallyFit}
              className={`w-full py-4 rounded-2xl border-2 font-black text-xs uppercase tracking-widest transition-all ${isMedicallyFit ? 'bg-brand-red-600 text-white hover:shadow-2xl hover:shadow-brand-red-600/40 hover:-translate-y-1' : 'bg-brand-slate-200 text-brand-slate-400 cursor-not-allowed'}`}
            >
              Confirm Membership
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateDonorProfile;
