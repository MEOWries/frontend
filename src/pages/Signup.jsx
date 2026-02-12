import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { authService } from "../services/AuthServices";
import useMyContext from "../hooks/UseMyContext";
import {Navigate} from "react-router-dom"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [registering, setRegistering] = useState(false);
  const {user,loading} = useMyContext()

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setRegistering(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const location = {
          city,
          lat: latitude,
          lng: longitude,
        };

        try {
          await authService.register({
            email,
            phone,
            password,
            role: "donor",
            location,
          });
          alert("register successful!");
          navigate("/login");
        } catch (err) {
          alert("Error registering!");
        } finally {
          setRegistering(false);
        }
      },
      () => {
        setRegistering(false);
        alert("Please allow your location!");
      },
    );
  };

   if (loading) return null;
  
    if (user) {
      return <Navigate to={"/dashboard"} replace />;
    }

  return (
    // h-screen instead of min-h-screen to prevent unnecessary scrolling
    <div className="h-screen bg-brand-slate-50 flex items-center justify-center p-4">
      {/* Container: Added max-h for a compact "Dashboard" feel */}
      <div className="max-w-4xl w-full max-h-[90vh] bg-white rounded-xl shadow-lg flex overflow-hidden animate-fade-in border border-brand-slate-500/10">
        {/* Left Side: Branding/Information (Hidden on mobile) */}
        <div className="hidden md:flex md:w-5/12 bg-brand-red-600 p-12 flex-col justify-between text-white relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">BloodDonation</h2>
            <p className="mt-4 text-brand-red-100 text-lg">
              Join a network of heroes and help save lives in your local
              community.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <p>Get notified of urgent needs nearby</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <p>Track your donation history</p>
            </div>
          </div>

          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 animate-pulse-light"></div>
        </div>

        {/* Right Side: Compact Form */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-sm mx-auto">
            <header className="mb-6">
              <h1 className="text-2xl font-bold text-brand-slate-950">
                Create Account
              </h1>
              <p className="text-xs text-brand-slate-500">
                Quick setup for new members.
              </p>
            </header>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none"
                    placeholder="name@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none"
                    placeholder="9XXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold py-2.5 rounded-md transition-all mt-4 text-sm shadow-sm"
              >
                {registering ? "Signing up..." : "Sign up"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-brand-slate-50 text-center">
              <p className="text-xs text-brand-slate-500">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-brand-red-600 font-bold hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
