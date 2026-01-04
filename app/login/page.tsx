'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import {  } from '../../utils/translations';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    phone: '',
    password: '',
  });
  const [useEmail, setUseEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Login data:', loginData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/owner/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12 text-white">
          <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-6xl mb-8 shadow-2xl border border-white/30">
            🚗
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-center">Welcome Back</h1>
          <p className="text-xl opacity-95 text-center max-w-md font-light">
            {('Your Trusted Vehicle Rental Platform')}
          </p>
          
          <div className="mt-16 grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-extrabold mb-1">500+</div>
              <div className="text-sm opacity-90 font-medium">Vehicles</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-extrabold mb-1">50+</div>
              <div className="text-sm opacity-90 font-medium">Cities</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-extrabold mb-1">10K+</div>
              <div className="text-sm opacity-90 font-medium">Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md animate-fadeIn">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            {/* <span className="text-6xl">🚗</span> */}
            <h1 className="text-2xl font-bold text-gradient mt-2">YatraWheels</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                {('Login')}
              </h2>
              <p className="text-gray-600 font-medium">
                Sign in to continue to your account
              </p>
            </div>

            {/* Login Type Toggle */}
            <div className="flex bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-1.5 mb-8 shadow-inner">
              <button
                type="button"
                onClick={() => setUseEmail(true)}
                className={`flex-1 py-3.5 rounded-lg text-sm font-bold transition-all ${
                  useEmail 
                    ? 'bg-white shadow-lg text-blue-600 scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setUseEmail(false)}
                className={`flex-1 py-3.5 rounded-lg text-sm font-bold transition-all ${
                  !useEmail 
                    ? 'bg-white shadow-lg text-blue-600 scale-105' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                 Phone
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {useEmail ? ('Email Address') : ('Phone Number')}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {useEmail ? '' : ''}
                  </span>
                  <input
                    name={useEmail ? "email" : "phone"}
                    type={useEmail ? "email" : "tel"}
                    required
                    value={useEmail ? loginData.email : loginData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium shadow-sm"
                    placeholder={useEmail ? "your@email.com" : "+91 98765 43210"}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold text-gray-700">
                    {('Password')}
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  {/* <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span> */}
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full btn-primary py-4 text-lg font-bold shadow-lg hover:shadow-xl ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In →'
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-medium">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
             
            </div>

            {/* Quick Access Buttons */}
            
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex items-center justify-center gap-8 text-gray-500 text-sm font-semibold">
            <span className="flex items-center gap-2">🔒 Secure</span>
            <span className="flex items-center gap-2">✓ Verified</span>
            <span className="flex items-center gap-2">🛡️ Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;