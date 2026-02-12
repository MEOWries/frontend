import React from "react";
import Button from "../components/common/Button.jsx";
import { Link } from "react-router";

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-slate-50 text-brand-slate-900 font-sans">
      {/* Header/Navbar Placeholder */}
      <header className="bg-white shadow-sm py-4 px-2 md:px-12 space-x-2">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-brand-red-600">
            BloodDonation
          </a>
          <div className="flex items-center space-x-4">
           <Link to={"/login"}> <Button
              className="hidden md:block"
            >
              Login
            </Button>
            </Link>
            <Link to={"/signup"}>
            <Button primary>
              Register
            </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-linear-to-br from-brand-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-slate-900 leading-tight mb-4">
              Connect. Donate.{" "}
              <span className="text-brand-red-600">Save Lives.</span>
            </h1>
            <p className="text-xl text-brand-slate-500 mb-8 max-w-lg mx-auto md:mx-0">
              Bridging the gap between urgent blood needs and willing donors,
              efficiently and effectively. Your contribution makes a direct
              impact.
            </p>
            <div className="flex justify-center md:justify-start gap-4 animate-fade-in-up delay-200">
              <Button
                primary="true"
              >
                Register as a Donor
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center animate-fade-in-right">
            {/* Abstract Blood Drop / Medical Illustration */}
            <div
              className="hidden relative w-full max-w-md h-64 md:h-100 bg-brand-red-100 rounded-full lg:flex items-center justify-center
                          before:absolute before:inset-0 before:bg-brand-red-600 before:rounded-full before:animate-pulse-light before:opacity-10"
            >
              <img
                src="donatingBlood.png" // Placeholder: Replace with an actual SVG/PNG
                alt="Blood Donation Icon"
                className="w-40 h-40 md:w-70 md:h-70 lg:w-90 lg:h-90 object-contain animate-float rounded-full  "
              />
            </div>
               <img
                src="donatingBlood.png" // Placeholder: Replace with an actual SVG/PNG
                alt="Blood Donation Icon"
                className="hidden md:flex lg:hidden w-70 h-70 object-contain animate-float rounded-full  "
              />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-brand-slate-900 mb-4 animate-fade-in">
            How It Works
          </h2>
          <p className="text-lg text-brand-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
            A seamless process connecting those who need blood with those who
            can give.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-brand-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-200">
              <div className="bg-brand-red-100 p-4 rounded-full mb-6 relative z-10">
                <span className="text-brand-red-700 text-3xl font-bold">1</span>
                <div className="absolute inset-0 bg-brand-red-600 rounded-full animate-ping opacity-10"></div>
              </div>
              <h3 className="text-2xl font-semibold text-brand-slate-900 mb-3">
                Organizations Request
              </h3>
              <p className="text-brand-slate-500">
                Hospitals and blood banks post urgent needs for specific blood
                types in their area.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-brand-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-300">
              <div className="bg-brand-red-100 p-4 rounded-full mb-6 relative z-10">
                <span className="text-brand-red-700 text-3xl font-bold">2</span>
                <div className="absolute inset-0 bg-brand-red-600 rounded-full animate-ping opacity-10"></div>
              </div>
              <h3 className="text-2xl font-semibold text-brand-slate-900 mb-3">
                Donors Get Notified
              </h3>
              <p className="text-brand-slate-500">
                Registered donors matching the blood type and location receive
                instant alerts.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-brand-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up delay-400">
              <div className="bg-brand-red-100 p-4 rounded-full mb-6 relative z-10">
                <span className="text-brand-red-700 text-3xl font-bold">3</span>
                <div className="absolute inset-0 bg-brand-red-600 rounded-full animate-ping opacity-10"></div>
              </div>
              <h3 className="text-2xl font-semibold text-brand-slate-900 mb-3">
                Donate & Save Lives
              </h3>
              <p className="text-brand-slate-500">
                Donors accept the request, visit the center, and the
                organization updates the status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-brand-red-600 py-20 px-6 md:px-12 text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center gap-3">
          <h2 className="text-4xl font-bold animate-fade-in-up">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl animate-fade-in-up delay-100">
            Every drop counts. Your donation saves lives and brings hope.
          </p>
          <div className="flex justify-center md:justify-start gap-4 animate-fade-in-up delay-200">
            <Button
            className="bg-white"
              onClick={() => alert("Register as Donor Clicked")}
            >
              Register as a Donor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-brand-slate-950 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">BloodDonation</h4>
            <p className="text-brand-slate-500 text-sm">
              Connecting generosity with urgent needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-brand-slate-500">
              <li>
                <a href="#" className="hover:text-brand-red-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red-600 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-brand-slate-500">info@blooddonation.com</p>
            <p className="text-brand-slate-500">+977 9XXXXXXXXX</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-slate-800 text-center text-brand-slate-500 text-sm">
          &copy; {new Date().getFullYear()} BloodDonation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
