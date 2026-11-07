import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Car, 
  Users, 
  TrendingDown, 
  ArrowRight, 
  MapPin, 
  Smartphone, 
  Mail, 
  User as UserIcon, 
  CheckCircle2, 
  Lock, 
  Zap,
} from 'lucide-react';
import { BuyingTimeline, User } from '../types';
import { INDIAN_CITIES, DEMO_USER } from '../data/mockData';
import { CustomSelect } from './CustomSelect';

interface AuthGateProps {
  onLoginSuccess: (user: User) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  
  // Sign up fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('Ahmedabad');
  const [timeline, setTimeline] = useState<BuyingTimeline>('Ready to book in 7 days');
  
  // Sign in fields
  const [loginPhone, setLoginPhone] = useState('');
  
  // OTP flow simulation
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [pendingUser, setPendingUser] = useState<User | null>(null);

  const cityOptions = useMemo(() => {
    return INDIAN_CITIES.map((c) => ({
      value: c.city,
      label: `${c.city}, ${c.state}`,
      badge: c.tier,
    }));
  }, []);

  // Quick 1-click Demo Sign In
  const handleQuickDemoLogin = () => {
    onLoginSuccess(DEMO_USER);
  };

  const handleInitiateSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) return;
    if (!email.trim()) return;

    const matchedCity = INDIAN_CITIES.find(c => c.city === selectedCity);
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      phone: phone.startsWith('+91') ? phone : `+91 ${phone.trim()}`,
      email: email.trim(),
      city: selectedCity,
      state: matchedCity ? matchedCity.state : 'Gujarat',
      timeline,
      isVerified: true,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    };

    setPendingUser(newUser);
    setShowOtpModal(true);
    setOtpCode('');
    setOtpError('');
  };

  const handleInitiateSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginPhone.trim() || loginPhone.replace(/\D/g, '').length < 10) return;

    const matchedCity = INDIAN_CITIES.find(c => c.city === selectedCity) || INDIAN_CITIES[0];
    const user: User = {
      id: `user-${Date.now()}`,
      name: 'Verified Fleet Buyer',
      phone: loginPhone.startsWith('+91') ? loginPhone : `+91 ${loginPhone.trim()}`,
      email: 'buyer@fleetkart.in',
      city: selectedCity,
      state: matchedCity.state,
      timeline: 'Ready to book in 7 days',
      isVerified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    };

    setPendingUser(user);
    setShowOtpModal(true);
    setOtpCode('');
    setOtpError('');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setOtpError('');

    setTimeout(() => {
      setIsVerifying(false);
      if (otpCode === '8899' || otpCode.length === 4) {
        if (pendingUser) {
          onLoginSuccess(pendingUser);
        }
      } else {
        setOtpError('Invalid OTP code. Use demo code 8899.');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#EDE8F5] text-slate-800 flex flex-col justify-between selection:bg-[#7091E6] selection:text-white">
      {/* Top Brand Bar */}
      <header className="border-b border-[#3D52A0] bg-[#3D52A0] px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7091E6] flex items-center justify-center text-white font-black shadow-md shadow-[#7091E6]/30">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Fleet<span className="text-[#ADBBDA]">Kart</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#7091E6]/30 text-[#EDE8F5] border border-[#ADBBDA]/40">
                  India
                </span>
              </div>
              <p className="text-[11px] text-[#ADBBDA] font-medium hidden sm:block">
                Buy Together. Save Together.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#EDE8F5]">
            <ShieldCheck className="w-4 h-4 text-[#EDE8F5]" />
            <span className="hidden sm:inline">Official Showroom Delivery</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 w-full">
        {/* Left Column: Value Proposition & How it Works */}
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D52A0] text-white text-xs font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#EDE8F5]" />
            <span>Authorized Showroom Bulk Buying Network</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3D52A0] leading-tight">
            Buy Your Next Car With 5 Buyers. <br />
            <span className="text-[#7091E6]">
              Save Lakhs Together.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Individual car buyers have zero bargaining power with dealerships. FleetKart groups 5 verified buyers in your city together to unlock wholesale fleet pricing, free insurance, and priority dispatch.
          </p>

          {/* 3 Step Visual Explainer */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#ADBBDA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#7091E6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                1
              </div>
              <div>
                <h4 className="text-[#3D52A0] font-bold text-sm sm:text-base flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#7091E6]" />
                  Pick Your Car &amp; Indian City
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Select your dream car (e.g., Hyundai Creta, Scorpio-N, Grand Vitara) in your city (Ahmedabad, Mumbai, Delhi, etc.).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#ADBBDA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#7091E6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                2
              </div>
              <div>
                <h4 className="text-[#3D52A0] font-bold text-sm sm:text-base flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7091E6]" />
                  Join a 5-Buyer Fleet
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Team up with fellow buyers in your city. Coordinate variant choices, delivery dates, and token readiness in the Fleet Room.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#ADBBDA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#7091E6] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                3
              </div>
              <div>
                <h4 className="text-[#3D52A0] font-bold text-sm sm:text-base flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-[#7091E6]" />
                  Unlock Bulk Dealer Discounts
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Dealerships place competing bids for the 5-car order. Save up to ₹1.50 Lakh - ₹2.50 Lakh with free insurance and accessories!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Demo Login CTA Box */}
          <div className="p-4 rounded-2xl bg-white border border-[#ADBBDA] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#7091E6]">
                <Zap className="w-3.5 h-3.5 fill-[#7091E6]" />
                EVALUATION QUICK-PASS
              </div>
              <p className="text-xs text-slate-600">
                Test the flagship 4/5 Creta in Ahmedabad instantly:
              </p>
            </div>
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Instant Demo as Raj Patel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Sleek Login / Sign-Up Gate Form */}
        <div className="w-full max-w-md bg-white border border-[#ADBBDA] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Security & Access Restriction Badge */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#ADBBDA]">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#EDE8F5] text-[#3D52A0]">
                <Lock className="w-4 h-4 text-[#7091E6]" />
              </div>
              <span className="text-xs font-semibold text-[#3D52A0]">
                Confidential Fleet Access
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#3D52A0] bg-[#EDE8F5] px-2.5 py-1 rounded-full border border-[#ADBBDA]">
              India Only
            </span>
          </div>

          {/* Form Tabs */}
          <div className="flex bg-[#EDE8F5] p-1 rounded-xl mb-6 border border-[#ADBBDA]">
            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'signup'
                  ? 'bg-[#3D52A0] text-white shadow-sm'
                  : 'text-[#3D52A0] hover:bg-[#ADBBDA]/30'
              }`}
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('signin')}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'signin'
                  ? 'bg-[#3D52A0] text-white shadow-sm'
                  : 'text-[#3D52A0] hover:bg-[#ADBBDA]/30'
              }`}
            >
              Sign In
            </button>
          </div>

          {authMode === 'signup' ? (
            /* Sign-Up Form */
            <form onSubmit={handleInitiateSignup} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-[#8697C4] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Raj Patel"
                    className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Indian Mobile Number (For OTP Verification)
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#ADBBDA] bg-[#EDE8F5] text-[#3D52A0] text-xs font-semibold">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="98250 12345"
                    className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-r-xl px-3 py-2.5 text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8697C4] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Patelrajone0@gmail.com"
                    className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                  />
                </div>
              </div>

              {/* Indian City Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Home City (Dealers will be in your city)
                </label>
                <CustomSelect
                  value={selectedCity}
                  onChange={(val) => setSelectedCity(val)}
                  options={cityOptions}
                  icon={<MapPin className="w-4 h-4 text-[#7091E6]" />}
                  placeholder="Select Home City"
                  searchPlaceholder="Find your city..."
                />
              </div>

              {/* Buying Timeline */}
              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Buying Timeline
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {(['Ready to book in 7 days', 'Within 30 days', 'Just researching'] as BuyingTimeline[]).map((t) => (
                    <label
                      key={t}
                      className={`flex items-center gap-2 p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                        timeline === t
                          ? 'border-[#7091E6] bg-[#EDE8F5] text-[#3D52A0] font-bold'
                          : 'border-[#ADBBDA] bg-white text-slate-600 hover:border-[#7091E6]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        checked={timeline === t}
                        onChange={() => setTimeline(t)}
                        className="hidden"
                      />
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        timeline === t ? 'border-[#7091E6] bg-[#7091E6]' : 'border-[#8697C4]'
                      }`}>
                        {timeline === t && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="font-semibold">{t}</span>
                      {t === 'Ready to book in 7 days' && (
                        <span className="ml-auto text-[10px] bg-[#7091E6] text-white px-1.5 py-0.5 rounded font-black">
                          🔥 Priority
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer"
              >
                <span>Verify Mobile &amp; Unlock Fleets</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Sign-In Form */
            <form onSubmit={handleInitiateSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Registered Mobile Number
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#ADBBDA] bg-[#EDE8F5] text-[#3D52A0] text-xs font-semibold">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="98250 12345"
                    className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-r-xl px-3 py-2.5 text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D52A0] mb-1">
                  Your City
                </label>
                <CustomSelect
                  value={selectedCity}
                  onChange={(val) => setSelectedCity(val)}
                  options={cityOptions}
                  placeholder="Select City"
                  searchPlaceholder="Find your city..."
                />
              </div>

              <div className="p-3 rounded-xl bg-[#EDE8F5] border border-[#ADBBDA] text-xs text-slate-600">
                FleetKart uses secure passwordless instant OTP. An SMS code will be sent to verify your buying location.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer"
              >
                <span>Get Login OTP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <div className="mt-5 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7091E6]" />
            <span>100% Anti-Spam Guarantee. Your details are strictly shared with your 5-buyer fleet.</span>
          </div>
        </div>
      </div>

      {/* Simulated OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white border border-[#ADBBDA] rounded-3xl p-6 shadow-2xl text-center relative animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE8F5] text-[#7091E6] mx-auto flex items-center justify-center mb-4 border border-[#ADBBDA]">
              <Smartphone className="w-6 h-6 animate-bounce" />
            </div>

            <h3 className="text-xl font-black text-[#3D52A0] mb-1">
              Verify Indian Mobile
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Enter the 4-digit verification code sent to{' '}
              <span className="text-[#3D52A0] font-bold">
                {pendingUser?.phone || '+91 98250 12345'}
              </span>
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="flex justify-center gap-2">
                <input
                  type="text"
                  maxLength={4}
                  autoFocus
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="8899"
                  className="w-40 text-center tracking-widest text-2xl font-mono py-2.5 bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl text-[#3D52A0] focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
                />
              </div>

              {otpError && (
                <p className="text-xs text-rose-500 font-medium">{otpError}</p>
              )}

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setOtpCode('8899')}
                  className="text-xs text-[#7091E6] hover:text-[#3D52A0] font-bold underline underline-offset-4 cursor-pointer"
                >
                  ⚡ Auto-Fill Demo OTP: (8899)
                </button>

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-2.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isVerifying ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm &amp; Enter FleetKart</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowOtpModal(false)}
                  className="text-xs text-slate-500 hover:text-[#3D52A0] py-1 cursor-pointer"
                >
                  Change Mobile Number
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#3D52A0] bg-[#3D52A0] px-4 py-4 text-center text-xs text-[#EDE8F5]/80">
        <p>© 2026 FleetKart India Technologies Pvt. Ltd. Made for Indian Car Buyers. All prices in INR (₹).</p>
      </footer>
    </div>
  );
};
