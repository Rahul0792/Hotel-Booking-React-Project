import { useEffect, useState } from "react";
import restaurantApi from "../../api/restaurantApi";
import Card from "../../components/Card";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

// ✅ IMPORT LOCAL IMAGES
import rest1 from "../../assets/restaurants/rest1.jpg";
import rest2 from "../../assets/restaurants/rest2.jpg";
import rest3 from "../../assets/restaurants/rest3.jpg";
import rest4 from "../../assets/restaurants/rest4.jpg";
import rest5 from "../../assets/restaurants/rest5.jpg";
import rest6 from "../../assets/restaurants/rest6.jpg";
import rest7 from "../../assets/restaurants/rest7.jpg";
import rest8 from "../../assets/restaurants/rest8.jpg";
import rest9 from "../../assets/restaurants/rest9.jpg";
import rest10 from "../../assets/restaurants/rest10.jpg";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const images = [
    rest1, rest2, rest3, rest4, rest5,
    rest6, rest7, rest8, rest9, rest10
  ];

  useEffect(() => {
    restaurantApi.getAllRestaurants().then(setRestaurants);
  }, []);

  if (!restaurants.length) return <Loader />;

  const filteredRestaurants = restaurants.filter(
    (res) =>
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-8 py-16 min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">

      {/* ✅ HEADER + SEARCH */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Restaurants
        </h1>

        <input
          type="text"
          placeholder="Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 px-5 py-3 rounded-full shadow-xl border outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ✅ RESTAURANT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {filteredRestaurants.length ? (
          filteredRestaurants.map((res, index) => (
            <Card
              key={res.id}
              title={res.name}
              subtitle={res.location}
              image={images[index % images.length]}
            >
              <div className="flex flex-col gap-4 mt-4">

                {/* ✅ VIEW DETAILS */}
                <Link
                  to={`/restaurants/${res.id}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>

                {/* ✅ BOOK DINE → DineBookings PAGE */}
                <button
                  onClick={() => navigate("/bookings/dine")}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold shadow-md transition"
                >
                  🍽 Book Dine
                </button>

                {/* ✅ ORDER FOOD → MenuItemList PAGE */}
                <button
                  onClick={() => navigate("/menu-items")}
                  className="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full font-semibold shadow-md transition"
                >
                  🛒 Order Food
                </button>

              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
