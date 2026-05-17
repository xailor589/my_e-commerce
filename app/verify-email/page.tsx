import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">

        {/* ICON */}
        <div className="text-5xl mb-4">📩</div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800">
          Verify Your Email
        </h1>

        <p className="text-gray-500 mt-3">
          We have sent a verification link to your email.
          Please check your inbox and confirm your account.
        </p>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition shadow-md">
          Resend Verification Email
        </button>

        <p className="text-xs text-gray-400 mt-4">
          Didn’t receive email? Check spam folder or resend again.
        </p>

        <Link
          href="/login"
          className="inline-block mt-6 text-blue-600 font-medium hover:underline"
        >
          ← Back to login
        </Link>

      </div>
    </div>
  );
}