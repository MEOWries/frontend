import React from "react";
import { Link, useNavigate } from "react-router"; // or "react-router-dom"
import { ArrowUpRight, Clock, MapPin, Droplet, PlusCircle } from "lucide-react";
import { recentRequests } from "../../Data/mockData";
import StatCard from "../../components/dashboard/StatCard";
import UrgencyBadge from "../../components/common/Badge";
import { useEffect } from "react";
import { organizationService } from "../../services/OrganizationService";
import { useState } from "react";
import useMyContext from "../../hooks/UseMyContext";



const DashboardHome = () => {

  const [stats,setStats] = useState({})
  const {profile} = useMyContext()

  const navigate = useNavigate()

  useEffect (() => {
    const fetchStats = async()=>{
      try {
        const res = await organizationService.getDashStats("698dc409e0c2483e9edd6e2d")
        setStats(res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchStats()
  },[])
 
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-brand-slate-900">Dashboard Overview</h1>
          <p className="text-brand-slate-500 text-sm">Welcome back, here's what's happening today.</p>
        </div>
        <button
          onClick={() => navigate('/organization/create')}
          className="bg-brand-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-red-600 transition-colors shadow-lg shadow-brand-slate-900/20 hover:shadow-brand-red-600/30 flex items-center gap-2"
        >
          <PlusCircle size={18} /> New Request
        </button>
      </div>


      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label= "Active Requests" value= {stats.activeRequests || 0}  color= "bg-brand-red-600" />
        <StatCard label= "Critical Needs" value= {stats.criticalRequests || 0} sub= "Requires immediate attention" color= "bg-orange-500" />
        <StatCard  label= "Donors Matched" value= {stats.donorsMatched || 0} sub= "This month" color= "bg-brand-slate-900" />
        <StatCard label= "Total Units" value= {stats.totalUnitsCollected || 0} color= "bg-emerald-600" />
      </div>


      {/* Recent Activity Table */}
      <div className="bg-white border border-brand-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-brand-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-brand-slate-900">Recent Requests</h3>
          <button onClick={() => navigate('/organization/active')} className="text-xs font-bold text-brand-red-600 hover:text-brand-slate-900 uppercase tracking-widest transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-slate-50/50 text-[10px] uppercase tracking-widest text-brand-slate-400 font-bold">
                <th className="p-6">Blood Type</th>
                <th className="p-6">Units</th>
                <th className="p-6">Location</th>
                <th className="p-6">Urgency</th>
                <th className="p-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-slate-50 text-sm font-medium text-brand-slate-700">
              {recentRequests.map((req) => (
                <tr key={req.id} className="hover:bg-brand-slate-50/50 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-red-50 text-brand-red-600 flex items-center justify-center font-black text-xs">
                        {req.blood}
                      </div>
                    </div>
                  </td>
                  <td className="p-6">{req.units} Pints</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-brand-slate-500">
                      <MapPin size={14} /> {req.location}
                    </div>
                  </td>
                  <td className="p-6"><UrgencyBadge level={req.urgency} /></td>
                  <td className="p-6">
                     <div className="flex items-center gap-2 text-brand-slate-400 text-xs">
                       <Clock size={14} /> {req.time}
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome