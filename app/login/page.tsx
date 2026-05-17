"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* Background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">

        {/* Card */}
        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50">

          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-black tracking-widest text-white">
              LUXE<span className="text-yellow-400">.</span>
            </Link>
            <h1 className="text-xl font-bold text-white mt-4 mb-1">ຍິນດີຕ້ອນຮັບກັບຄືນ 👋</h1>
            <p className="text-white/40 text-sm">Login ເຂົ້າສູ່ລະບົບຂອງທ່ານ</p>
          </div>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm py-3 rounded-xl mb-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.2 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36.5 24 36.5c-5.3 0-9.7-3.7-11.3-8.7l-6.5 5C9.5 39.5 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.6 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
            </svg>
            Login ຜ່ານ Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/25 text-xs font-medium">ຫຼື login ດ້ວຍ Email</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-gray-950/60 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/50 focus:shadow-[0_0_0_3px_rgba(250,204,21,0.08)] transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
              ລະຫັດຜ່ານ
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-gray-950/60 border border-white/8 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/50 focus:shadow-[0_0_0_3px_rgba(250,204,21,0.08)] transition-all duration-200"
              />
              <button
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors text-sm"
              >
                {show ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="text-right mb-6">
            <Link href="/forgot-password" className="text-yellow-400/70 hover:text-yellow-400 text-xs font-medium transition-colors">
              ລືມລະຫັດຜ່ານ?
            </Link>
          </div>

          {/* Submit */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold text-sm hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                ກຳລັງ Login...
              </span>
            ) : "Login →"}
          </button>

          {/* Register */}
          <p className="text-center text-white/35 text-sm mt-6">
            ຍັງບໍ່ມີບັນຊີ?{" "}
            <Link href="/register" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
              ສະໝັກສະມາຊິກ
            </Link>
          </p>
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs mt-6">
          By logging in, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}