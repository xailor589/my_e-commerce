"use client";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* Background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">

        {/* Card */}
        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50">

          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-black tracking-widest text-white">
              LUXE<span className="text-yellow-400">.</span>
            </Link>
          </div>

          {!sent ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-3xl">
                  🔑
                </div>
              </div>

              <h1 className="text-xl font-bold text-white text-center mb-2">
                ລືມລະຫັດຜ່ານ?
              </h1>
              <p className="text-white/40 text-sm text-center mb-8 leading-relaxed">
                ໃສ່ Email ຂອງທ່ານ ພວກເຮົາຈະສົ່ງລິ້ງ<br />ຣີເຊັດລະຫັດຜ່ານໃຫ້ທ່ານ
              </p>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-950/60 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-yellow-400/50 focus:shadow-[0_0_0_3px_rgba(250,204,21,0.08)] transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSend}
                disabled={loading || !email}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold text-sm hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                    ກຳລັງສົ່ງ...
                  </span>
                ) : "ສົ່ງລິ້ງຣີເຊັດ →"}
              </button>
            </>
          ) : (
            /* Success State */
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-3xl">
                  ✉️
                </div>
              </div>

              <h1 className="text-xl font-bold text-white text-center mb-2">
                ກວດສອບ Email ຂອງທ່ານ!
              </h1>
              <p className="text-white/40 text-sm text-center mb-2 leading-relaxed">
                ພວກເຮົາໄດ້ສົ່ງລິ້ງຣີເຊັດໄປທີ່
              </p>
              <p className="text-yellow-400 text-sm text-center font-semibold mb-8">
                {email}
              </p>

              {/* Info box */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-4 mb-6 flex gap-3">
                <span className="text-lg mt-0.5">💡</span>
                <p className="text-white/45 text-xs leading-relaxed">
                  ຖ້າບໍ່ໄດ້ຮັບ Email ກະລຸນາກວດ Spam folder
                  ຫຼື ລໍຖ້າ 2-3 ນາທີ ແລ້ວລອງໃໝ່
                </p>
              </div>

              {/* Resend */}
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="w-full py-3.5 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-yellow-400/30 hover:text-yellow-400 transition-all duration-200 mb-3"
              >
                ສົ່ງໃໝ່ອີກຄັ້ງ
              </button>
            </>
          )}

          {/* Back to Login */}
          <div className="text-center mt-4">
            <Link
              href="/login"
              className="text-white/35 hover:text-white/70 text-sm transition-colors flex items-center justify-center gap-1"
            >
              ← ກັບໄປ Login
            </Link>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          By using our service, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}