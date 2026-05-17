import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign up to start shopping
        </p>

        {/* FORM */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md">
          Create Account
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}