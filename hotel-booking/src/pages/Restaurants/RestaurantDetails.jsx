import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import restaurantApi from "../../api/restaurantApi";
import Loader from "../../components/Loader";

export default function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    restaurantApi.getRestaurantById(id).then(setRestaurant);
  }, [id]);

  if (!restaurant) return <Loader />;

  return (
    <div className="px-8 py-16 min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">

      {/* ✅ CONTAINER */}
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10">

        {/* ✅ HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              {restaurant.name}
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              📍 {restaurant.location}
            </p>
          </div>

          {/* ✅ BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            ← Back
          </button>
        </div>

        {/* ✅ DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ✅ LEFT INFO */}
          <div className="space-y-5">
            <div className="bg-blue-50 p-6 rounded-2xl shadow">
              <p className="text-gray-700 text-lg font-medium">
                🏢 Restaurant Name
              </p>
              <p className="mt-1 font-bold text-xl text-gray-900">
                {restaurant.name}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl shadow">
              <p className="text-gray-700 text-lg font-medium">
                📍 Location
              </p>
              <p className="mt-1 font-bold text-xl text-gray-900">
                {restaurant.location}
              </p>
            </div>
          </div>

          {/* ✅ RIGHT ACTIONS */}
          <div className="flex flex-col gap-6 justify-center">

            {/* ✅ BOOK DINE */}
            <button
              onClick={() => navigate("/bookings/dine")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold shadow-md transition"
            >
              🍽 Book Dine
            </button>

            {/* ✅ ORDER FOOD */}
            <button
              onClick={() => navigate("/menu-items")}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full text-lg font-semibold shadow-md transition"
            >
              🛒 Order Food
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
