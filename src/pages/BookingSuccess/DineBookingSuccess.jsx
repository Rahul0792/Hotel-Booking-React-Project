import { useNavigate } from "react-router-dom";

export default function DineBookingSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6">

      <div className="bg-white/90 backdrop-blur shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">

        <div className="text-green-600 text-5xl mb-4">🍽</div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Table Reserved Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Your dining table has been reserved. Enjoy your delicious meal!
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/restaurants")}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold shadow-md transition"
          >
            Back to Restaurants
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-green-600 text-green-600 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Go to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
