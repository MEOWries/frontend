import React from 'react'

function Login() {
  return (
    // h-screen ensures it takes exactly the viewport height
    <div className="h-screen bg-brand-slate-50 flex items-center justify-center p-4">
      
      {/* Container: Max-width 800px for a focused login experience */}
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg flex overflow-hidden animate-fade-in border border-brand-slate-500/10">
        
        {/* Left Side: Branding (Compact) */}
        <div className="hidden md:flex md:w-5/12 bg-brand-red-600 p-8 flex-col justify-center text-white relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold tracking-tight">Welcome Back</h2>
            <p className="mt-2 text-brand-red-100 text-sm leading-relaxed">
              Log in to manage your donations or post urgent blood requests.
            </p>
          </div>
          
          {/* Subtle Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 p-8 md:p-12 flex items-center">
          <div className="w-full max-w-sm mx-auto">
            <header className="mb-6">
              <h1 className="text-2xl font-bold text-brand-slate-950">Login</h1>
              <p className="text-xs text-brand-slate-500">Enter your credentials to access your dashboard.</p>
            </header>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Email Input */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="name@organization.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-slate-500">
                    Password
                  </label>
                  <a href="#" className="text-[10px] text-brand-red-600 hover:underline">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  required
                  className="w-full px-3 py-2 text-sm rounded-md border border-brand-slate-500/20 focus:ring-1 focus:ring-brand-red-600 outline-none transition-all placeholder:text-slate-300"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember Me Toggle */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-3 h-3 text-brand-red-600 border-brand-slate-300 rounded focus:ring-brand-red-600" 
                />
                <label htmlFor="remember" className="ml-2 text-xs text-brand-slate-500 select-none">
                  Keep me logged in
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold py-2.5 rounded-md transition-all mt-2 text-sm shadow-sm active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            {/* Footer Link */}
            <div className="mt-8 pt-4 border-t border-brand-slate-50 text-center">
              <p className="text-xs text-brand-slate-500">
                Don't have an account?{' '}
                <a href="/signup" className="text-brand-red-600 font-bold hover:underline">
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login